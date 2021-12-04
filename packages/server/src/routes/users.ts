import { Router } from 'express'
import * as usersController from '../controllers/users'

const router = Router()

router.get('/', usersController.getAllUsers)
router.get('/:name', usersController.getUsers)

export const userRoutes = router
