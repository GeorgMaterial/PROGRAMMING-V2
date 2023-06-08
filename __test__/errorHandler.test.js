/* @jest-environment jsdom */

import { error } from '../src/client/js/errorHandler'

describe('outputs HTML string for API response', () => {
    test( 'testing displayResults function', () => {
        document.body.innerHTML =
        `<div>
            <span class='validate'></span>
            <span class='validate'></span>
            <span id='input-error'></span>
        </div>` 

        const input = "foobar"
        
        expect(error("on", input)).not.toBeDefined();
    })
})