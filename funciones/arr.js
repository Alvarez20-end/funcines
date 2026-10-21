const personas = [
    
  { nombre: 'Ana', edad: 25, ciudad: 'México' },
  { nombre: 'Carlos', edad: 17, ciudad: 'Madrid' },
  { nombre: 'Lucía', edad: 30, ciudad: 'Bogotá' },
  { nombre: 'Pedro', edad: 22, ciudad: 'México' }
];

console.log(personas.filter(p => p.edad > 18));

console.log(personas.some(p => p.ciudad === 'Madrid'));
console.log(personas.every(p => p.edad >= 18));


console.log(personas.find(p => p.ciudad === 'México'));
console.log(personas.findIndex(p => p.nombre === 'Ana'));