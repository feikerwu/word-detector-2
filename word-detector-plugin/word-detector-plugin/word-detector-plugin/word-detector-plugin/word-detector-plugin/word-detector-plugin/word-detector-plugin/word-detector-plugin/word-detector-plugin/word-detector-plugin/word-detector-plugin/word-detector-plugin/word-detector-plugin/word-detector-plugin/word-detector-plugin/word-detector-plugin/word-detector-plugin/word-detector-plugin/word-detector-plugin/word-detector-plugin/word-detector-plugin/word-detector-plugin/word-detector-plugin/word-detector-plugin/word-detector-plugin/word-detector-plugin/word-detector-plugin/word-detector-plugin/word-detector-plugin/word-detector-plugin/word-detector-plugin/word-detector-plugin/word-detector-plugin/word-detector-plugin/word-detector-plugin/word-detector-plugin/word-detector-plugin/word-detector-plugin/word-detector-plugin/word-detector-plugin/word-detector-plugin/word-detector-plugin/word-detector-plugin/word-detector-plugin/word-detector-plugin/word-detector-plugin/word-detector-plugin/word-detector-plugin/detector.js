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
}

document.addEventListener('click', detector)