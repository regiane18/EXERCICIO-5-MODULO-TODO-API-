import sqlite from 'sqlite3'
const db = sqlite.Database('Tarefas')

db.all('SELECT * FROM USUARIOS ', function(err,resp) {
    if(err) {
        throw new Error(`Erro ao rodar consulta ${err}`)
    } else {

    }
})