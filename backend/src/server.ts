import { fastify } from 'fastify'
import dotenv from 'dotenv'

dotenv.config()

const app = fastify()
const appPort = parseInt(process.env.PORT || '5000')

app.get('/', (req, res) => res.send('Rota esta acessivel'))

app.listen({ port: appPort }).then(() => {
  console.log(`
    HTTP server running!
    local: http://localhost:${appPort}/
    `)
})
