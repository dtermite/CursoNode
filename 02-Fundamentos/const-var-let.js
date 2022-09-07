
// const -> se declaran constantes que no pueden cambiar su valor
// let -> se declaran variables que se usan solo en cada ambito
// var -> se declaran variables globales, en las nuevas convenciones no se usa mas


const nombre='Wolverine';

if(true){
    const nombre='Magneto';
    console.log(nombre);
}

console.log(nombre);