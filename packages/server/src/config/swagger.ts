import swaggerUi from 'swagger-ui-express'
import openApiSpec from '../api-docs/open-api.json'

import swaggerJsDoc, { OAS3Options } from 'swagger-jsdoc'

const options: OAS3Options = {
  apis: [],
  swaggerDefinition: openApiSpec,
}

const specs = swaggerJsDoc(options)

export default {
  swaggerServe: swaggerUi.serve,
  swaggerSetup: swaggerUi.setup(specs),
}
