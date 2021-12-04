import { Request, Response } from 'express'

export const getUsers = (req: Request, res: Response) => {
  const { name } = req.params
  res.set(200).send({
    id: 1,
    name: name,
    email: name + '@email.com',
    phone: '0965432123',
    status: 'active',
  })
}

export const getAllUsers = (req: Request, res: Response) => {
  res.set(200).send([
    {
      id: 1,
      name: 'John',
      email: 'john@email.com',
      phone: '0965432123',
      status: 'active',
    },
    {
      id: 2,
      name: 'Sammy',
      email: 'sammy@email.com',
      phone: '2165432123',
      status: 'active',
    },
  ])
}
