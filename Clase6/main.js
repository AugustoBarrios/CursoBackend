const fs = require('fs')
const express = require('express');

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
ruta.deleteById();
ruta.save(objInfo) */

const app = express();
const port = 8080;

const server = app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
})