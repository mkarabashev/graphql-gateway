import { launch } from "../src";

describe('index', () => {
    it('builds', () => {
        const greeting = launch()
        expect(greeting).toBe('hello world')
    })
})