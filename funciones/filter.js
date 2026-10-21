const productos = [
  { nombre: 'Laptop', precio: 1200 },
  { nombre: 'Mouse', precio: 25 },
  { nombre: 'Teclado', precio: 75 },
  { nombre: 'Monitor', precio: 300 }
];

console.log(productos.filter(p => p.precio > 100));
console.log(productos.filter(p => p.nombre.length > 5));