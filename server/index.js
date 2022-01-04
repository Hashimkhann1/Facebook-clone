import express, { application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Connection from './database/db.js'
import router from './router/router.js'



const app = express()

app.use(cors())

app.use(bodyParser.json({limit : '30mb' , extended : true}))
app.use(bodyParser.urlencoded({limit : '30mb' , extended : true}))

app.use(router)


const PORT = 4001

app.listen(PORT , () => console.log('server is running on port' , PORT))

Connection()