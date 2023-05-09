function separateLiquids(glass) {
    const values = {"A": 0.87, "O": 0.80, "W": 1, "H": 1.36}
    const arr = [];
    glass.forEach(a => arr.push(...a))
    const setArr = [...(new Set(arr))];
    setArr.sort((a, b) => values[a] - values[b])
    const liqs = [];
    setArr.forEach(l =>{
      liqs.push(...arr.filter(w => w===l))
    });
    const output = [];
    while(liqs.length) output.push(liqs.splice(0, glass[0].length));
    return output;
}