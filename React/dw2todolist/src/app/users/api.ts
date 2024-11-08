export interface IUser{
    id: number
    name: string
    email: string
}

export const getUsers = async (): Promise<IUser[]> => {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users')
    return await resposta.json()
}