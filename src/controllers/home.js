function Home(app) {
  app.get('/', listar)
  function listar(req, res) {
      res.send('home')
  }
}
export default Home