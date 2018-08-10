function normalizeWord(word) {
    let text = word.trim()
    text = text.toLowerCase()
    return text
}

function validateWord(word) {
    let reg = /^[\w][\w\s]*$/
    return reg.test(word)
}

function detector() {
    let word = window.getSelection().toString()
    word = normalizeWord(word)
    if (validateWord(word)) {
        console.log(word)
    }

    fetch('http://localhost:3000/hello').then(res => {
        return res.json()
    }).then(data => {
        console.log(data)
    })
}



document.addEventListener('click', detector)