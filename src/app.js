import express from 'express'
import usuarioController from './controllers/usuario-controller.js'
import tarefaController from './controllers/tarefa-controller.js'

const app = express()
app.use(express.json())

usuarioController(app)
tarefaController(app)

export default app