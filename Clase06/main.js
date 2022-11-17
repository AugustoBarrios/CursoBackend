/* const fs = require('fs')
const express = require('express')

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
            await fs.promises.writeFile(`./productos.txt`, JSON.stringify(content, null, 2))
        }catch(error){
            console.log(error)
        }
    }

     getById(Id){
        try{
            const content = JSON.parse(  fs.readFileSync(`./${this.ruta}`, 'utf-8', ))
            Id = parseInt(Math.random() * content.length + 1);
            console.log(Id)
            const buscador = content.filter(buscador => buscador.id === Id)
            return JSON.stringify(buscador, null, 2 )
        }catch(error){
            console.log(error, "no funciono")
        }
    }

    getAll(){
        try{
        const content = JSON.parse(  fs.readFileSync(`./${this.ruta}`, 'utf-8', ))
        const contenteTxt =  fs.readFileSync(`./productos.txt`, 'utf-8', )
        console.log(contenteTxt)
        return contenteTxt
    }catch(error){
        console.log(error, "no funciono")
    }}

    async deleteById(id){
        try{
            const content = JSON.parse( await fs.promises.readFile(`./${this.ruta}`, 'utf-8', ))
            const buscador = content.filter(buscador => buscador.id !== id)
            await fs.promises.writeFile(`./${this.ruta}`, JSON.stringify(buscador, null, 2))
            await fs.promises.writeFile(`./productos.txt`, JSON.stringify(content, null, 2))
            console.log(`Producto eliminado numero ${id}`)
        }catch(error){
            console.log(error, "no funciono")
        }
    }

    async deleteAll(){
        try{
            await fs.promises.writeFile(`./${this.ruta}`, JSON.stringify([], null, 2))
            await fs.promises.writeFile(`./productos.txt`, JSON.stringify('' , null, 2))
            console.log(`Productos eliminados`)
        }catch(error){
            console.log(error, "no funciono")
        }
    }

}

const ruta = new Contenedor(`array.json`)
let objInfo = {id:0, titulo:"", descripcion: ""}

ruta.getAll();  
ruta.getById();
ruta.deleteAll();
ruta.deleteById();
ruta.save(objInfo) */

// NO EJECUTAR ruta.save(objInfo) CON NODEMON ACTIVADO

/* 
const app = express();
const port = 8080; 

const server = app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
})

app.get('/productos', (req, res)=>{
    res.send(`Lo has logrado ${ruta.getAll()}`)
})

app.get('/productosRandom', (req, res)=>{
    res.send(`Lo has logrado ${ruta.getById(2)}`)
}) */