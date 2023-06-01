var inputType = ''

function validate_data(formData, key){

    // CREATES QUERY BODY FOR API REQUEST
    
    formData.set('verbose','y')  // TOGGLE ADDITIONAL INFORMATION
    formData.set('key', key) // API KEY
    formData.set('lang', 'auto') // INPUT LANGUAGE
    formData.set('of', 'json') // OUTPUT FORMAT


    // VALIDATE INPUT -- TEXT OR URL BUT NOT BOTH OR NEITHER
    if (formData.get('txt')){
        if (formData.get('url')){
            console.log('pick one ONLY pls')
        } else {
            formData.delete('url')
            inputType = 'txt'
            return formData
        }
    } else if (formData.get('url')){
        formData.delete('txt')
        inputType = 'url'
        return formData
    } else {
        // INSERT ERROR HANDLER
        console.log('Please enter either some text or a URL')
    }

}

function handleSubmit(e){
    e.preventDefault()

    const form = document.querySelector('#form')
    const submit = document.querySelector('input[value=submit]')

    // configures form data for validation
    let formData = new FormData(form, submit);
    
    // FINALISES REQUEST BODY
    let validData = validate_data(formData, Client.api);

    console.log('validData', validData)
    return validData
}

// PROCESS API RESPONSE TO BE READABLE ON SITE
async function processResponse(data){
    console.log('processResponse', data)
    let processed_data = await matchDefinitions(data)

    
}




function matchDefinitions(data){
    let dataObj = []
    // RESULT DEFINITIONS FROM API DOCS
    const definitions = {
        'score_tag':{
            "P+":"Very Positive",
            "P": "Positive",
            "NEU": 'Neutral',
            'N': "Negative",
            'N+': "Very Negative",
            "NONE": "No polarity"
        },
        'agreement':{
            "AGREEMENT":"All elements have the same polarity.",
            "DISAGREEMENT": "Not all elements have the same polarity."
        },
        'subjectivity':{
            "OBJECTIVE": "No marks indicating subjectivity.",
            "SUBJECTIVE": "Found marks indicating subjectivity."
        },
        'irony':{
            "NONIRONIC":"Nothing to indicate irony.",
            "IRONIC": "Some indicators of irony."
        }
    }

    // MATCH DEFINITION WITH DATA RECEIVED
    for (let [key, val] of Object.entries(definitions)){
        if ( data[key] ){
            dataObj.push([`${key}`, `${val[data[key]]}`])
        }   
    }

    // SNIPPET

    let sentences = []
    for (let item of data.sentence_list){
        sentences.push(item.text)
        if (data.sentence_list.indexOf(item) > 5){
            break
        }
    }
    console.log(sentences)
    const snippet = sentences.join(' ')

    Client.displayResults(dataObj, snippet, inputType)
}


export {
    handleSubmit,
    processResponse
}

