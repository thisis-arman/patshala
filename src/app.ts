import express, { Application } from 'express'
import { UserRoutes } from './app/modules/user/user.route'
import cors from 'cors'
const app :Application= express()
const port  = 3000



app.use(express.json())
app.use(cors())

app.use('/api/v1/',UserRoutes)



app.get('/', (req, res) => {
  res.send('Hello World!')
})



export default app;