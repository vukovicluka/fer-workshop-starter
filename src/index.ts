import express, { Express } from 'express'
import dotenv from 'dotenv'
import { initialize } from 'express-openapi'
import path from 'path'
import swaggerUI from 'swagger-ui-express'

dotenv.config()

void (async () => {
  const app: Express = express()

  const init = await initialize({
    app,
    apiDoc: path.resolve(__dirname, 'definitions/v1/api.yml'),
    dependencies: {},
    paths: path.resolve(__dirname, 'paths'),
    routesGlob: '**/*.{ts,js}',
    routesIndexFileRegExp: /(?:index)?\.[tj]s$/,
  })

  app.use('/docs', swaggerUI.serve)
  app.get('/docs', swaggerUI.setup(init.apiDoc))

  app.use('/', (req, res) => {
    res.send('Hello FER')
  })

  const port = process.env.PORT
  app.listen(port, () => console.log('Server running at http://localhost:' + port))
})()
