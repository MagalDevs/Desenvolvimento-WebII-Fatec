"use client"
import { useEffect, useState } from "react";
import { getUsers, IUser } from "./api";

export default function Users(){
    const [listaUsers, setListaUsers] = useState<IUser[]> ([])
    const [userForm, setUserForm] = useState({name: '', email: '', passw: ''})
    
    useEffect(() => {
        const fetchUsers = async () => {
            const lista = await getUsers()
            setListaUsers(lista)
        }

        fetchUsers()
    }, [])

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h2>Lista de Usuários</h2>
            <ul>
                {
                    listaUsers.map((user) => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))
                }
            </ul>

            <hr />
            <input value={userForm.name} 
            onChange={(e) => setUserForm({...userForm, name: e.target.value})} 
            type="text" placeholder="Nome" />

            <input value={userForm.email} 
            onChange={(e) => setUserForm({...userForm, email: e.target.value})}
            type="email" placeholder="E-mail" />

            <input value={userForm.passw} 
            onChange={(e) => setUserForm({...userForm, passw: e.target.value})}
            type="password" placeholder="senha" />

            <button onClick={() => console.log(userForm)}>Cadastrar</button>
        </div>
        
    )
}