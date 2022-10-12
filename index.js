/* const animales = document.getElementById("mascota");  
const cargar = document.getElementById("cargar"); */

class Usuario{
    
    constructor(nombre, apellido,){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    };
    
     getFullName () {
        return `Hola mi nombre es ${this.apellido + ` ` + this.nombre}`
    };

    addMascota(animal){
        /*Nombre de mascotas agregados*/
        this.mascotas.push(`${animal}`);
        constructorUsuarios.countMascotas(); /* constructorUsuarios.addMascota("animal") */
        
    };

    countMascotas(){
        /*Cantidad de mascotas*/
        for(let i = 0; i<this.mascotas.length; i++){
            console.log("Tienes " + i + 1 + " mascota/s")
        }
    };
    
    addBook(nombre, autor){
        this.libros.push({Nombre: nombre, Autor: autor})
        constructorUsuarios.getBooksName(); /* constructorUsuarios.addBook("libro", "autor") */
    }

    getBooksName(){
       let getBook = this.libros.map(libro => libro.Nombre);
       console.log(getBook)
    }
    
};

const constructorUsuarios = new Usuario("Augusto", "Barrios Gil",);

console.log(constructorUsuarios);
/* console.log(constructorUsuarios.getFullName()); */
constructorUsuarios.addMascota("pixel");
constructorUsuarios.addBook("El cadaver de la novia", "Tim Burton");

