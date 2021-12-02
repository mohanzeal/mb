import express, { Application, Request, Response } from 'express'
const app: Application = express()
const port = 8001

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/users', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send([
    {
      name: 'john doe',
      id: 1,
      lname: 'doe',
    },
  ])
})

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`)
  })
} catch (error: any) {
  console.error(`Error occured: ${error.message}`)
}
