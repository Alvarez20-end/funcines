const alumnos = [
  { nombre: 'Ana', edad: 17 },
  { nombre: 'Luis', edad: 20 },
  { nombre: 'Carmen', edad: 19 }
];

console.log(alumnos.find(a => a.edad > 18));
console.log(alumnos.find(a => a.nombre === 'Luis'));