const fs = require('fs')
const express = require('express')
const { stringify } = require('querystring')
/* const { Console } = require('console') */
const { Router } = express


class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }

     save(object) {
        try {
            const content = JSON.parse( fs.readFileSync(`./${this.ruta}`, 'utf-8',))
            const count = content.length
            const modificId = content[count - 1].id + 1
            object.id = modificId
            const pusheo = content.push(object)
            console.log(pusheo)
            const add =  fs.writeFileSync(`./${this.ruta}`, JSON.stringify(content, null, 2))
             fs.writeFileSync(`./productos.txt`, JSON.stringify(content, null, 2))
        } catch (error) {
            console.log(error)
        }
    }

    updateUsers(Id, User){
        try{
            const content = JSON.parse( fs.readFileSync(`./${this.ruta}`, 'utf-8',))
            const buscadorParse  = content.findIndex(buscador => buscador.id == JSON.parse(Id))
            content.splice(buscadorParse, 1, {id: User.id, titulo: User.titulo, descripcion: User.descripcion})
            fs.writeFileSync(`./${this.ruta}`, JSON.stringify(content, null, 2))
            

        }catch{}
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
            return contenteTxt
        } catch (error) {
            console.log(error, "no funciono")
        }
    }

    deleteById(Id) {
        try {
            const content = JSON.parse(fs.readFileSync(`./${this.ruta}`, 'utf-8'))
            const buscadorParse  = content.findIndex(buscador => buscador.id == JSON.parse(Id))
            const borrador = content.splice(buscadorParse, 1)
            console.log(buscadorParse)
            console.log(content)
            if(buscadorParse >= 0){
                 fs.writeFileSync(`./${this.ruta}`, JSON.stringify(content, null, 2)) 
             fs.writeFileSync(`./productos.txt`, JSON.stringify(content, null, 2)) 
            }else{}
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

const app = express();
app.use(express.static(__dirname + '/public')); //Aqui
app.use(express.urlencoded({extended: true}))
const router = Router();
router.use(express.json());
const port = 8080;

const server = app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})

router.get("/users", (req, res) => {
    res.send(`Lo has logrado ${ruta.getAll()}`)
})

router.get(`/user/:id`, (req, res) => {
    let IdRequest = req.params.id;
    res.send(`Lo has logrado ${ruta.getById(IdRequest)}`)
})

router.post(`/post`, (req, res)=>{
    const { body } = req;
    console.log(body)
    ruta.save(body)
    res.json({Mensaje: "producto agregado"}) //HAY QUE EJECUTAR PRIMERO ESTA URL EN POSTMAN Y LUEGO FUNCIONA PROFE NOSE SI ASI ESTA BIEN

})

router.delete(`/delete/:id`, (req, res) => {
    let IdRequest = req.params.id;
    const product = ruta.deleteById(IdRequest);
    res.json({Mensaje:`Eliminaste con exito el usuario/producto con el id: ${IdRequest} `})
})

router.put(`/userModify/:id`, (req, res) => {
    let IdRequest = req.params.id;
    const { body } = req;
    console.log( "Esto es el body actual", body)
    res.json({Mensaje:`Producto actualizado ${ruta.updateUsers(IdRequest, body)}`})
})


app.use("/api", router)

// POSTMAN (https://web.postman.co/workspace/My-Workspace~d6b47eb3-02dd-4cc6-8244-b85bd27af5f9/request/create?requestId=5a26a350-5e40-4509-a2ab-c5e2d5887d5f)