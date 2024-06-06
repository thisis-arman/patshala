
import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()
import bodyParser from 'body-parser'
import globalErrorHandler, {  } from './app/middlewares/globalErrorHandler'
import { notFound } from './app/middlewares/notFound'
import router from './app/route'
const port = 3000



app.use(bodyParser.json());


app.use(express.json())
app.use(cors())

app.use('/api/v1', router)
// app.use('/api/v1/academic-semester', AcademicSemesterRoute)



app.use(globalErrorHandler)
app.use(notFound)



app.get('/', (req, res) => {
  res.send('Hello World!')
})



export default app;