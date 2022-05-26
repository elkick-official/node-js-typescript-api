import express, { Express, RequestHandler } from 'express'
import moment from 'moment'
import morganBody from 'morgan-body'
import path from 'path'
import { router } from './routes/v1'

const fs = require('fs')
const cors = require('cors')

require('./database')

const app: Express = express()
const corsOptions: any = {
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  Headers: ['content-type'],
}

app.use(cors())
app.use('*', cors())
app.options('/target', cors(corsOptions))
app.use(express.json({ limit: '50mb' }) as RequestHandler)
app.use(
  express.urlencoded({
    extended: true,
    limit: '50mb',
  }),
)
app.enable('trust proxy')
const log = fs.createWriteStream(
  path.join(__dirname + '/logs', `${moment().format('YYYY-MM-DD')}.log`),
  { flags: 'a' },
)

morganBody(app, {
  noColors: true,
  stream: log,
})

app.use(router)
const port: number = 4857
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
