// MODULE IMPORTS //
import { handleSubmit, processResponse } from './js/dataHandler'
import { displayResults, formToggle } from './js/dynamicDisplay'
import { getKey, apiPOST } from './js/routeHandler';
import { error } from './js/errorHandler'

// STYLE IMPORTS
import './styles/main.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/results.scss'
import './styles/header.scss'


const form = document.querySelector('#form')

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

form.addEventListener('submit',e =>{
    e.preventDefault()
    error('off')
    getKey()
    .then(function(key){

        let query = handleSubmit(e, key)

        // POST REQUEST CALL
        apiPOST(baseURL, query )

        .then(function(data){
            if (data.status.code != '0'){
                console.log('error', data.status)
            } else {
                processResponse(data)
            }
        })
    })
})

export {
    displayResults,
    error,
    formToggle
}
