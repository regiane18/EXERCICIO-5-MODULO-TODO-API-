import express from 'express'
import usuarioController from './controllers/usuario-controller.js'
import tarefaController from './controllers/tarefa-controller.js'
import Home from './controllers/home.js'

const app = express()
app.use(express.json())

Home(app)
usuarioController(app)
tarefaController(app)

export default app