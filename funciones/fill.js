let letras = ['a', 'b', 'c', 'd', 'e'];
let letras1 = [...letras];
letras.fill("x",0,3);
console.log(letras);


let letras2 = [...letras];
letras.fill("z",2,5);
console.log(letras);

