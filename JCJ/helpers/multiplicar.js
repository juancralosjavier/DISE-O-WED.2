const { rejects } = require('assert')
const colors = require('colors');
const fs = require('fs');
const crearArchivo = (num = 5) => { //alt+shit+f ordena el codigo

    return new Promise((resolve, rejects) => {
        let salida = '';
        salida += '===================================' + ' \n ';
        salida += '           Tabla del : ' + (num).toString() + ' \n ';
        salida += '===================================' + ' \n ';


        for (let i = 1; i <= 10; i++) {
            salida += `${num} x ${i} = ${num * i} \n`.green;
        }
        fs.writeFile(`salida/salida${num}.txt`, salida, (err) => {
            if (err) throw err; console.log(' Archivo Creado ')

        });
    })
}
module.exports = { crearArchivo }