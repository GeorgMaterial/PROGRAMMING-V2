// MODULE IMPORTS //
import { 
    handleSubmit,
    processResponse
} from './js/dataHandler'
import { displayResults } from './js/dynamicDisplay.js'
import { apiPOST } from './js/routeHandler';



const form = document.querySelector('#form')

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

form.addEventListener('submit',e =>{
    let query = handleSubmit(e)

    // POST REQUEST CALL
    apiPOST(baseURL, query)

    .then(function(data){
        if (data.status.code != '200'){
            console.log('error', data.status)
        } else {
        processResponse(data)
        }
    })
})

export {
    displayResults
}




// press submit
// POST request to API
// receive response
// handle response
// display response