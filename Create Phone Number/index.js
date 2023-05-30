function createPhoneNumber(numbers){
    const string = numbers.join('');
    return `(${string.slice(0, 3)}) ${string.slice(3, 6)}-${string.slice(6, 10)}`
  }