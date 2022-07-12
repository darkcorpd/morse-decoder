const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
  };
  
  function decode(expr) {
    // write your solution here
    const binaries = chunk(expr,10); 
    let result = '';
    for (let i = 0; i < binaries.length; i++) {
      const binary = chunk(binaries[i], 2);
      const morseCode = toMorseCode(binary);
      result += MORSE_TABLE[morseCode];
    }
  
    return result;
  }
  
  // Splits string into n-digit chunks
  function chunk(str, size) {
    return str.match(new RegExp('.{1,' + size + '}', 'g'));
  }
  
  // Converts binary numbers to Morse code
  function toMorseCode(arr) {
    let code = '';
    arr.forEach(cur => {
        if (cur === '00') {
          code += '';
        } else if (cur === '10') {
          code += '.';
        } else if (cur === '11') {
          code += '-';
        } else if (cur === '**') {
          code += '**';
        }});
      return code;
  }
  
  
  module.exports = {
    decode
  }