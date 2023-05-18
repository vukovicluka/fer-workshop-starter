import { Operation } from 'express-openapi'

export default () => {
  const GET: Operation = (req, res) => {
    res.status(200).json('Hello')
  }

  GET.apiDoc = {
    summary: 'Endpoint that returns a list of teams',
    operationId: 'getTeams',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/getTeams',
            },
          },
        },
      },
    },
  }

  return { GET }
}
