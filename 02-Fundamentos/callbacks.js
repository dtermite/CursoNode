//callback: Funcion que se manda como argumento a otra funcion


const getUsuarioByID=(id, callback) =>{
    const user={
        id,
        nombre:'Diego'
    }

    setTimeout(() => {
        callback(user)
    }, 1500)
}

getUsuarioByID(10,(usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
})
