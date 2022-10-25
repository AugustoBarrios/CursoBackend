const fs = require('fs')

class Contenedor{
    constructor(ruta){
        this.ruta = ruta
    }

    async save(object){
        try{
            const content = JSON.parse( await fs.promises.readFile(`./${this.ruta}`, 'utf-8', ))
            const count = content.length
            const modificId = content[count - 1].id + 1 
            object.id = modificId
            const pusheo = content.push(object)
            const add = await fs.promises.writeFile(`./${this.ruta}`, JSON.stringify(content, null, 2))
        }catch(error){
            console.log(error)
        }
    }

    async getById(id){
        try{
            const content = JSON.parse( await fs.promises.readFile(`./${this.ruta}`, 'utf-8', ))
            const buscador = content.filter(buscador => buscador.id === id)
            console.log(buscador, "Este es tu producto")
        }catch(error){
            console.log(error, "no funciono")
        }
    }

    async getAll(){
        try{
        const content = JSON.parse( await fs.promises.readFile(`./${this.ruta}`, 'utf-8', ))
        console.log(content)
        console.log("------------------------------------------")
        console.log("Aqui tienes todos los productos disponibles")
    }catch(error){
        console.log(error, "no funciono")
    }}

    async deleteById(id){
        try{
            const content = JSON.parse( await fs.promises.readFile(`./${this.ruta}`, 'utf-8', ))
            const buscador = content.filter(buscador => buscador.id !== id)
            await fs.promises.writeFile(`./${this.ruta}`, JSON.stringify(buscador, null, 2))
            console.log(`Producto eliminado numero ${id}`)
        }catch(error){
            console.log(error, "no funciono")
        }
    }

    async deleteAll(){
        try{
            const content = JSON.parse( await fs.promises.readFile(`./${this.ruta}`, 'utf-8', ))
            await fs.promises.writeFile(`./${this.ruta}`, JSON.stringify([], null, 2))
            console.log(`Productos eliminados`)
        }catch(error){
            console.log(error, "no funciono")
        }
    }

}

const ruta = new Contenedor(`array.json`)

let objInfo = {id:0, titulo:"", descripcion: ""}
    
/* ruta.getAll();
ruta.getById();
ruta.deleteAll();
ruta.deleteById(); */
ruta.save(objInfo)



/* const animales = document.getElementById("mascota");  
const cargar = document.getElementById("cargar"); */

/* const inputMascotas = document.getElementById("mascota").innerText;
const inputLibro = document.getElementById("libro").innerText;
const inputAutor = document.getElementById("autor").innerText;

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
        Nombre de mascotas agregados
        this.mascotas.push(`${animal}`); constructorUsuarios.addMascota("animal")
        constructorUsuarios.countMascotas(); 
        
    };

    countMascotas(){
        Cantidad de mascotas
        for(let i = 0; i<this.mascotas.length; i++){
            console.log("Tienes " + (i + 1)  + " mascota/s")
        }
    };
    
    addBook(nombre, autor){
        this.libros.push({Nombre: nombre, Autor: autor})
        constructorUsuarios.getBooksName(); constructorUsuarios.addBook("libro", "autor")
    }

    getBooksName(){
       let getBook = this.libros.map(libro => libro.Nombre);
       console.log(getBook)
    }
    
};

const constructorUsuarios = new Usuario("Augusto", "Barrios Gil",);

console.log(constructorUsuarios);
console.log(constructorUsuarios.getFullName());
constructorUsuarios.addMascota("pixel");
constructorUsuarios.addBook("El cadaver de la novia", "Tim Burton");

 */