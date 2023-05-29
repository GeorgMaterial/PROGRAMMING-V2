function validate_data(d, key){
    
    d.set('verbose','y')
    d.set('key', key)
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

export { validate_data }