//const heroes =['Deapol','Superman','Batman'];
const getUsuarioByID = ( id, Callback ) =>{
    const user,


    setTimeout( () =>{
        Callback(user)
    },3000)

}

getUsuarioByID( 10, ( usuario )=>{
    console.log(usuario.id);
    console.log( usuario.nombre.toUperCase() );
});