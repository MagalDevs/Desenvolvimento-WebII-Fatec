"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { getTodos, Itodo } from "./todo/api";

export default function Home(){
  const [tarefas, setTarefas] = useState<Itodo[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      const listaTarefas = await getTodos()
      listaTarefas.splice(10)
      setTarefas(listaTarefas)   
    }

    fetchTodos()
  }, [])

  return(
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-amber-600">Olá Mundo!</h1>

      <Link href='/todo'>
      <span className="text-blue-500 hover:underline">Todo list</span>
      </Link>
      <hr />
      <ul>
        {
          tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.title}</li>
          ))
        }
      </ul>
      <Link href='/users'><span>Users</span></Link>
    </div>
  )
}