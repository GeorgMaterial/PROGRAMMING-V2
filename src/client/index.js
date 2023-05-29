// MODULE IMPORTS
const form = document.querySelector('#form')
const submit = document.querySelector('input[value=submit]')


const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const API_KEY = process.env.API_KEY

form.addEventListener('submit',handleSubmit)

function handleSubmit(e){
    e.preventDefault()

    // configures form data for validation
    let formData = new FormData(form, submit);

    // FINALISES REQUEST BODY
    let validData = validateFormData(formData);

    // POST REQUEST CALL
    apiPOST(baseURL, validData)

    .then(function(data){
        console.log('data', data)
        serverPOST('/',validData)
    })
}

// VALIDATE REQUEST BODY
function validateFormData(d){
    
    d.set('verbose','y')
    d.set('key', API_KEY)
    d.set('lang', 'auto')
    d.set('of', 'json')

    if (d.get('txt')){
        if (d.get('url')){
            console.log('pick one ONLY pls')
        } else {
            d.delete('url')
            return d
        }
    } else if (d.get('url')){
        d.delete('txt')
        return d
    } else {
        console.log('Please enter either some text or a URL')
    }

}


// POST REQUEST
const apiPOST = async( url='', data={} ) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        body: data
    });

    try {
        const newData = await response.json()
        return newData;
    } catch(error) {
        console.log('error', response)
        console.log('error', error)
    }
}

// POST TO SERVER
const serverPOST = async( url='', data={} ) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json()
        return newData;
    } catch(error) {
        console.log('error', response)
        console.log('error', error)
    }
}

// API REQUEST ?????
const apiRequest = async (url, data) => {
    const request = await fetch(url);

    try {
        const allData = await request.json();
        return allData ;
    } catch (error) {
        console.log("error", error);
    }
}

// AFTER PRESSING SUBMIT

