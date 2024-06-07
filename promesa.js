const empleados = [
    {
        id:1,
        nombre:'David'
    },
    {
        id:2,
        nombre:'Juan'
    },
    {
        id:3,
        nombre:'Pedro'
    },
];

const getEmpleado = ( id ) => {
    return new Promise(( resolve, reject ) => {
        const empleado = empleados.find( e => e.id === id ) ?.nombre;
        ( empleado )
            ? resolve(empleado)
            : reject( ` No existe empleado con id ${ id }`)
    });
}
const id=2;
getEmpleado(id)
    .then( empleado => console.log(empleado) )
    .catch( err => console.log(err));