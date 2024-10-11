import { Router } from "express"
import { createUser, deleteUser, findAllUsers, updateUser } from "../controllers/user.controller"
import { validate } from "../middlewares/validate.middleware"
import { createUserDto, updateUserDto } from "../dtos/user.dto"

const router = Router()
router.post('/', validate(createUserDto), createUser)
router.get('/', findAllUsers)
router.delete('/:id', deleteUser)
router.patch('/:id', validate(updateUserDto), updateUser)

export default router