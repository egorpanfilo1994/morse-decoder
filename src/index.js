const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrChar = expr.match(/.{10}/g)
    for (let i = 0; i < arrChar.length; i++) {
        arrChar[i] = arrChar[i].replace(/10/g, '.')
        arrChar[i] = arrChar[i].replace(/11/g, '-')
        arrChar[i] = arrChar[i].replace(/0/g, '')
    }

    for (let i = 0; i < arrChar.length; i++) {
        if (arrChar[i] == '**********') {
            arrChar[i] = ' '
        }
        for (let key in MORSE_TABLE) {
            if (arrChar[i] == key) {
                arrChar[i] = MORSE_TABLE[key]
            }
        }
    }
    return arrChar.join('')
}

module.exports = {
    decode
}