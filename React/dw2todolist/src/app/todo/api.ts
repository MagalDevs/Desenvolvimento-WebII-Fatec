export interface Itodo{
    userId: number
    id: number
    title: string
    completed: boolean
}

export const getTodos = async (): Promise<Itodo[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await response.json()
}