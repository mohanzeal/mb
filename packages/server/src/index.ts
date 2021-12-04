import express, { Application } from 'express'
import { allowCros } from './config/cors'
import swaggerOptions from './config/swagger'
import { userRoutes } from './routes/users'

// TODO: Move to config variables or environment variables
const port = 8001
const API_BASE = '/api/v1'

const app: Application = express()
// app cors
app.use(allowCros)

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// swagger docs
app.use(
  API_BASE + '/docs',
  swaggerOptions.swaggerServe,
  swaggerOptions.swaggerSetup
)

// api routes
app.use(API_BASE + '/users', userRoutes)

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`)
  })
} catch (error) {
  console.error(`Error occured: ` + error)
}
