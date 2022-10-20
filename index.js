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

class Contenedor{
    constructor(route){
        this.route = route
    }
    async getAll(){
        try{
            const content = await this.getAll()
            return content
        } catch(error){
            console.log(error)
            return []
        }
    }
    async deletById(id){
        try{
            const content = await this.getAll()
                const elementoFiltrado = content.filter(e => e.id !==id)
                await fs.writeFile(`./${this.route}`), JSON.stringify(elementoFiltrado, null)
            }catch(error){
                console.log(error)
            }
    }
}
