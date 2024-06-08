const { crearArchivo } = require('./helpers/multiplicar');
const num = 10;
crearArchivo(num).then(nombreArchivo =>console.log(nombreArchivo, ' crearArchivo '))