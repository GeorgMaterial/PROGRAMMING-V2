import { displayResults } from '../src/client/js/dynamicDisplay'

describe('outputs HTML string for API response', () => {
    test( 'testing displayResults function', () => {

        const input = {
            data: [
                ["foo", "bar"],
                ["foobar","barfoo"]
            ],
            snippet: "Test Snippet",
            inputType: "txt"
        }
        
        expect(displayResults(input)).toBeDefined();
    })
})