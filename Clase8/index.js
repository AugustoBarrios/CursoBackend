const fs = require('fs')
const express = require('express')
/* const { Console } = require('console') */
const { Router } = express


class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }

    async save(object) {
        try {
            const content = JSON.parse(await fs.promises.readFile(`./${this.ruta}`, 'utf-8',))
            const count = content.length
            const modificId = content[count - 1].id + 1
            object.id = modificId
            const pusheo = content.push(object)
            const add = await fs.promises.writeFile(`./${this.ruta}`, JSON.stringify(content, null, 2))
            await fs.promises.writeFile(`./productos.txt`, JSON.stringify(content, null, 2))
        } catch (error) {
            console.log(error)
        }
    }

    getById(Id) {
        try {
            const content = JSON.parse(fs.readFileSync(`./${this.ruta}`, 'utf-8',))
            const buscador = JSON.stringify(content.filter(buscador => buscador.id === JSON.parse(Id)))
            return buscador
        } catch (error) {
            console.log(error, "no funciono")
        }
    }

    getAll() {
        try {
            const content = JSON.parse(fs.readFileSync(`./${this.ruta}`, 'utf-8',))
            const contenteTxt = fs.readFileSync(`./productos.txt`, 'utf-8',)
            console.log(contenteTxt)
            return contenteTxt
        } catch (error) {
            console.log(error, "no funciono")
        }
    }

    deleteById(Id) {
        try {
            const content = JSON.parse(fs.readFileSync(`./${this.ruta}`, 'utf-8'))
            const buscadorParse = content.filter(buscador => buscador.id == JSON.parse(Id))
            fs.writeFileSync(`./${this.ruta}`, JSON.stringify(buscadorParse, null, 2))
            const buscadorStringify = content.filter(buscador => buscador.id == Id)
            fs.writeFileSync(`./productos.txt`, JSON.stringify(buscadorStringify, null, 2))
        } catch (error) {
            console.log(error, "no funciono")
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(`./${this.ruta}`, JSON.stringify([], null, 2))
            await fs.promises.writeFile(`./productos.txt`, JSON.stringify('', null, 2))
            console.log(`Productos eliminados`)
        } catch (error) {
            console.log(error, "no funciono")
        }
    }

}

const ruta = new Contenedor(`array.json`)
const contentOfArrayJson =  fs.readFileSync(`./array.json`, 'utf-8',)
/* let objInfo = { id: 0, titulo: "", descripcion: "" } */


const app = express();
const router = Router();

const port = 8080;

const server = app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})

router.get("/productos", (req, res) => {
    res.send(`Lo has logrado ${ruta.getAll()}`)
})

router.get(`/productos/:id`, (req, res) => {
    let IdRequest = req.params.id;
    res.send(`Lo has logrado ${ruta.getById(IdRequest)}`)
})

router.delete(`/eliminarproductos/:id`, (req, res) => {
    let IdRequest = req.params.id;
    const deleted = contentOfArrayJson.find(object => object.id === IdRequest) //HOLA PORFE ESTOY TRABADO EN ESTE DELETE NO SE PORQUE NO ME FUNCIONA, PROBE USAR EL "RUTA.DELETBYID(2), Y TAMPOCO ME FUNCIONA"
    console.log(deleted)
    res.json({
       
    })
})


app.use("/api", router)






