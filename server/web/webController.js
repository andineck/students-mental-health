const { Router } = require('./node_modules/express')

Router()
  .use(new Bundler('./index.html').middleware())
  .get('/', async (_req, res) => {
    const index = await fs.readFile('./index.html', 'utf8')
    res.send(index)
  })