function displayResults(data, snippet, inputType){

    // CONFIGURING HOW THE DATA DISPLAYS ON SITE
    const resultDiv = document.getElementById('results')

    // VISUALISING DATA OBJECT
    let array = ["<ul>"]
    for (let item of data){
        array.push(`<li><strong>${item[0]}:</strong> ${item[1]}`)
    }
    array.push('</ul>')

    let visualData = array.join('')
    let title = ''
    // VISUALISING TEXT SNIPPET
    if (inputType == 'txt'){
        title = "<p class='snippet-head'>Analyzed Text:</p>"
    } else if ( inputType == 'url' ){
        title = "<p class='snippet-head'>Analyzed Text Snippet:</p>"
    }

    let snippetStr = `<div>${title}<p class='snippet-text'>${snippet}</p></div>`

    visualData = snippetStr.concat(visualData)

    resultDiv.innerHTML = visualData
}

export {
    displayResults
}