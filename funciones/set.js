const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];

const setNumeros = new Set(numerosDuplicados);
console.log(setNumeros);

const sinDuplicados = [...setNumeros];
console.log(sinDuplicados);

setNumeros.add(6);
console.log(setNumeros.has(6));