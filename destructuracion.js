const persona ={
    nombre :'Juan Carlos',
    apellido: 'javier',
    poder: 'controlador',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} `;
    }
}
//forma 1
//const poder=deadpool.poder;
//console.log(poder);
const{nombre,apellido,poder}=persona;
console.log('nombre :'+nombre);
console.log('apellido :'+apellido);
console.log('poder :'+poder);