import { validate_data } from "../src/client/js/dataHandler";

describe('Callibrates the formData as required', () => {
    test( 'testing validata_data function', () => {
        const input = new FormData
        input.set('txt','foo')

        var inputType = ''


        expect(validate_data(input,"string")).toBeDefined();
    })
})