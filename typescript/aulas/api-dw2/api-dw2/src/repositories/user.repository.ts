import User from '../entities/user.entity'
import { createUserDto, updateUserDto } from '../dtos/user.dto'

export const createUser = async (data: createUserDto) => {
    const newUser = await User.create({ data }) 

    return { ...newUser, password: undefined } 
}

export const findUserByEmail = async (email: string) => {
    return User.findFirst({where: {email}})
}

export const findAllUsers = async () => {
    return User.findMany()
}

export const deleteUser = async (id: number) => {
    return User.delete({ where: {id} })
}

export const findUserById =async (id: number) => {
    return User.findFirst({ where: {id} })
}

export const updateUser = async (id: number, data: updateUserDto) => {
    return User.update({ where: {id}, data})
}

export const findUserByIdWithTasks = async (id: number) => {
    return User.findFirst({ where: { id }, include: { tasks: true } })
  }
  