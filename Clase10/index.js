const fs = require('fs')
const express = require('express')
//const { stringify } = require('querystring')
//const { Router } = express


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
            content.splice(buscadorParse, 1, {id: User.id, titulo: User.titulo, precio: User.precio,})
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
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const contentAllUse = JSON.parse(fs.readFileSync(`./array.json`, 'utf-8'))

app.set('views', './views');
app.set('view engine', 'ejs');

const server = app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})

app.get("/", (req, res) => {
    res.render('inicio', {contentAllUse})
})

app.post(`/productos`, (req, res)=>{
    const prueba = ruta.save(req.body)
    console.log(prueba)
    res.redirect('/');
})