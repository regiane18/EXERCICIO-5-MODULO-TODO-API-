import Usuario from '../models/usuario.js'
import Tarefa from '../models/tarefa.js'

const bdUsuarios = []
const bdTarefas = []

const user1 = new Usuario('Nome do usuário 1', 'Email 1', 'Senha 1')
bdUsuarios.push(user1)

const user2 = new Usuario('Nome do usuário 2', 'Email 2', 'Senha 2')
bdUsuarios.push(user2)

const tarefa1 = new Tarefa('Título da tarefa 1', 'Descrição da tarefa 1', 'A fazer', new Date())
bdTarefas.push(tarefa1)

const tarefa2 = new Tarefa('Título da tarefa 2', 'Descrição da tarefa 2', 'A fazer', new Date())
bdTarefas.push(tarefa2)

export { bdUsuarios, bdTarefas }