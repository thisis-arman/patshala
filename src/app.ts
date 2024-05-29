import express, { Application } from 'express'
import { UserRoutes } from './app/modules/user/user.route'
import cors from 'cors'
const app: Application = express()
import bodyParser from 'body-parser'
import { globalErrorHandler } from './app/middlewares/globalErrorHandler'
const port = 3000


app.use(bodyParser.json());


app.use(express.json())
app.use(cors())

app.use('/api/v1/users', UserRoutes)


app.use(globalErrorHandler)



app.get('/', (req, res) => {
  res.send('Hello World!')
})



export default app;