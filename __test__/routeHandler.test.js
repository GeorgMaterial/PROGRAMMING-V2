
import { getKey } from "../src/client/js/routeHandler";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(
            { "api": 'foobar'}
        )
    })
)

beforeEach(() => {
    fetch.mockClear()
})


it( 'returns JSON object', async () => {
    
    expect(await getKey()).toBe('foobar')
})


