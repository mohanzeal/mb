import express, { Application, Request, Response } from 'express'
import { allowCros } from './config/cors'

const app: Application = express()
const port = 8001

// app cors
app.use(allowCros)

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/users', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send([
    {
      id: 1,
      name: 'John doe',
    },
    {
      id: 2,
      name: 'Sammy doe',
    },
  ])
})

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`)
  })
} catch (error) {
  console.error(`Error occured: ` + error)
}
