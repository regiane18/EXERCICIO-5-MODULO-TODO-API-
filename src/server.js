import cors from 'cors'


import app from "./app.js"

const port = 3000

app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

