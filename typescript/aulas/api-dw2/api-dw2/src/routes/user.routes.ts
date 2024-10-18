import { Router } from "express"
import { createUser, deleteUser, findAllUsers, findUserByIdWithTasks, updateUser } from "../controllers/user.controller"
import { validate } from "../middlewares/validate.middleware"
import { createUserDto, updateUserDto } from "../dtos/user.dto"

const router = Router()

router.post('/', validate(createUserDto), createUser)
router.get('/', findAllUsers)
router.delete('/:id', deleteUser)
router.patch('/:id', validate(updateUserDto), updateUser)
router.get('/:id/tasks', findUserByIdWithTasks) // Define a rota para buscar um usuário pelo ID e suas tarefas

export default router