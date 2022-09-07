
const deadpool={
    nombre:'Wade',
    apellido:'Winston',
    poder:'regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

console.log (deadpool.getNombre());

//const nombre=deadpool.nombre;
//const apellido=deadpool.apellido;
//const poder=deadpool.poder;

// Desestructuracion para escribir menos codigo
//se escriben las  variables y se le indica de donde tomar los valores

const{nombre, apellido, poder}=deadpool;
console.log (nombre,apellido,poder);

const heroes=['Deadpool','Superman','Batman'];
//const h1=heroes[0];
//const h2=heroes[1];
//const h3=heroes[2];

const [h1,h2,h3]=heroes;

console.log(h1,h2,h3);


