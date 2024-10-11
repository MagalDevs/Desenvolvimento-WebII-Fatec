import { createUser, deleteUser, findAllUsers, findUserByEmail, findUserById, updateUser } from "../repositories/user.repository"
import { createUserDto, updateUserDto } from "../dtos/user.dto"

export const createUserService = async (data: createUserDto) => {
    const user = await findUserByEmail(data.email)
    if(user) throw new Error('E-mail já cadastrado!')
    return await createUser(data)
}

export const findAllUsersService = async () => {
    return await findAllUsers()
}

export const deleteUserService =async (id: number) => {
    const User = await findUserById(id)

    if(!User) throw new Error('Usuário não encontrado')

    return await deleteUser(id)
}

export const updateUserService = async (id: number, data: updateUserDto) => {
    const User = await findUserById(id)

    if(!User) throw new Error('Usuário não encontrado')

    return await updateUser(User.id, data)
}