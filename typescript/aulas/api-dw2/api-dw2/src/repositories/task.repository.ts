import { CreateTaskDTO, UpdateTaskDTO } from "../dtos/task.dto";
import Task from "../entities/task.entity";

export const createTask = async (data: CreateTaskDTO ) => {
    return await Task.create({ data })
}

export const findAllTasks = async () => {
    return await Task.findMany()
}

export const findTaskById = async (id: number) => {
    return await Task.findUnique({ where: { id } })
}

export const updateTask = async (id: number, data: UpdateTaskDTO) => {
    return await Task.update({ where: { id }, data })
}

export const deleteTask = async (id: number) => {
    return await Task.delete({ where: { id } })
}