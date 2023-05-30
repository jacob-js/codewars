function reverseVowels(str) {
    const strArray = str.split('')
    const withoutVowels = strArray.map(character => /[^aeiou]/i.test(character) ? character: null);
    const vowels = strArray.filter(character => /[aeiou]/i.test(character)).reverse()
    let outputString = "";
    withoutVowels.forEach(character =>{
      if(character) outputString += character;
      else outputString += vowels.shift();
    });
    return outputString;
}