import * as commandLineArgs from 'command-line-args'
import { codegen } from '@graphql-codegen/core'
import { DocumentNode, GraphQLSchema, printSchema, print } from 'graphql'
import { gql, makeExecutableSchema } from 'apollo-server-koa'
import { join } from 'path'
import { plugin as typescriptResolverPlugin } from '@graphql-codegen/typescript-resolvers'
import { plugin as typescriptPlugin } from '@graphql-codegen/typescript'
import { promisify } from 'util'
import { writeFile } from 'fs'

const writeAsync = promisify(writeFile)

interface Args extends commandLineArgs.CommandLineOptions {
    typingsPath: string
    schemaPath: string
    schemaName: string
}

function extractArgs(): Args {
    const optionDefinitions: commandLineArgs.OptionDefinition[] = [
        { name: 'typingsPath', alias: 't', type: String },
        { name: 'schemaPath', alias: 'p', type: String },
        { name: 'schemaName', alias: 'n', type: String },
    ]

    const args = commandLineArgs(optionDefinitions) as Args

    return args
}

async function getSchema(path: string, name: string): Promise<GraphQLSchema> {
    const relativePath = join('../', path)
    const fileContent = await import(relativePath)

    return fileContent[name]
}

function createConfig(schema: GraphQLSchema, outputFile: string): Parameters<typeof codegen>[0] {
    return {
        schema: gql(printSchema(schema)),
        filename: outputFile,
        plugins: [
            { typescript: {} },
            { typescriptResolvers: {} },
        ],
        pluginMap: {
            typescript: {
                plugin: typescriptPlugin,
            },
            typescriptResolvers: {
                plugin: typescriptResolverPlugin,
            }
        },
        documents: [],
        config: {}
    }
}

async function generateSchemaTypes(): Promise<void> {
    const args = extractArgs()
    console.info('Args processed')

    const schema = await getSchema(args.schemaPath, args.schemaName)
    console.info('Schema created')

    const config = createConfig(schema, args.typingsPath)
    console.info('Config set up')

    const output = await codegen(config)
    console.info('Output generated')

    await writeAsync(join(process.cwd(), args.typingsPath), output)
}

generateSchemaTypes()
    .then(_ => {
        console.info(`Types successfully generated`)
        process.exit(0)
    })
    .catch(err => {
        console.error('Error: \n', err)
        process.exit(1)
    })