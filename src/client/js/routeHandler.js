

const apiPOST = async( url='', data={} ) => {
    console.log('api post')
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        body: data
    });

    try {
        const newData = await response.json()
        return newData;
    } catch(error) {
        console.log('apiPost error', response)
        console.log('apiPost error', error) 
    }
}

const getKey = async url => { 
    console.log('get key')
    let req = await fetch('http://localhost:8000/key')

    try {
        const res = await req.json()
        return res.api  
    } catch ( error ){
        console.log(error, 'getKey error')
    }
}

export { apiPOST, getKey }