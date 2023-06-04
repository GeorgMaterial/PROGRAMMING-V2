const inputFields = document.querySelectorAll('.validate')
const errorMsg = document.getElementById('input-error')

function error(toggle = 'off', errorText=''){
    

    if ( toggle == 'on' ){

        errorMsg.innerText = errorText
        inputFields.forEach((item) => {
            item.setAttribute('error','')

            item.addEventListener('click', resolveError)
        })
        
    } else if ( toggle == 'off'){
        resolveError
    }
    
}

function resolveError(){
    inputFields.forEach((item) => {
        item.removeAttribute('error','')
    })
    errorMsg.innerText = ''
}


export { 
    error
}