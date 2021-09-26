const result = document.querySelector('.password-result')
const copy = document.querySelector('.copy-btn')
const generate = document.querySelector('.generate-btn')
const form = document.querySelector('form')
const pLength = document.querySelector('#passwordLength')
const pSpacing = document.querySelector('#passwordSpacing')
const uppercaseSwitch = document.querySelector('#uppercaseSwitch')
const lowercaseSwitch = document.querySelector('#lowercaseSwitch')
const numbersSwitch = document.querySelector('#numbersSwitch')
const symbolsSwitch = document.querySelector('#symbolsSwitch')

copy.addEventListener('click', copyToClipboard)

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const args = {
        len: Number(pLength.value),
        spacing: Number(pSpacing.value),
        isUppercase: uppercaseSwitch.checked,
        isLowercase: lowercaseSwitch.checked,
        hasNumbers: numbersSwitch.checked,
        hasSymbols: symbolsSwitch.checked
    }

    const password = passwordGenerator(args)

    result.textContent = password
})

function passwordGenerator({ len, spacing, isUppercase, isLowercase, hasNumbers, hasSymbols }) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!"£$%^&*()'

    const set =
        (isLowercase ? lowerCaseChars : '') +
        (isUppercase ? upperCaseChars : '') +
        (hasNumbers ? numbers : '') +
        (hasSymbols ? symbols : '')

    const blank = Array.from({ length: len + Math.floor(len / spacing) - 1 })

    return blank.map((_, idx) => idx % (spacing + 1) == spacing ? '-' : set.charAt(Math.floor(Math.random() * set.length))).join('')
}

function copyToClipboard () {
    if (result.textContent) {
        navigator.clipboard.writeText(result.textContent);
        return
    }

    generate.focus()
}