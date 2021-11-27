const getDomElements = () => {
    return {
        root: document.documentElement,
        result: document.querySelector('.password-result'),
        copy: document.querySelector('.copy-btn'),
        generate: document.querySelector('.generate-btn'),
        form: document.querySelector('form'),
        pLength: document.querySelector('#passwordLength'),
        pSpacing: document.querySelector('#passwordSpacing'),
        uppercaseSwitch: document.querySelector('#uppercaseSwitch'),
        lowercaseSwitch: document.querySelector('#lowercaseSwitch'),
        numbersSwitch: document.querySelector('#numbersSwitch'),
        symbolsSwitch: document.querySelector('#symbolsSwitch'), 
        tooltipText: document.querySelector('.custom-tooltiptext')
    }
}

const onSubmitForm = (event) => {
    event.preventDefault()

    const { pLength, pSpacing, uppercaseSwitch, lowercaseSwitch, numbersSwitch, symbolsSwitch, result } = getDomElements()

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
}

const passwordGenerator = ({ len, spacing, isUppercase, isLowercase, hasNumbers, hasSymbols }) => {
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

const copyToClipboard = (event) => {
    const { generate, result } = getDomElements()

    if (result.textContent) {
        navigator.clipboard.writeText(result.textContent);

        changeCopyBtnText(event)
        return
    }

    generate.focus()
}

const changeCopyBtnText = (event) => {
    const { root, tooltipText } = getDomElements()

    const props = {
        mouseover: {
            'text': 'Copy to clipboard',
            '--copy-btn-width': '120px',
            '--copy-btn-margin-right': '-60px'
        },
        click: {
            'text': 'Copied!',
            '--copy-btn-width': '60px',
            '--copy-btn-margin-right': '-30px'
        }
    }

    root.style.setProperty('--copy-btn-width', props[event.type]['--copy-btn-width']);
    root.style.setProperty('--copy-btn-margin-right', props[event.type]['--copy-btn-margin-right']);
    tooltipText.textContent = props[event.type].text
}

// Initialize function
const init = () => {
    const { copy, form } = getDomElements()

    copy.addEventListener('click', copyToClipboard)

    copy.addEventListener("mouseover", changeCopyBtnText)

    form.addEventListener('submit', onSubmitForm)
}

init()