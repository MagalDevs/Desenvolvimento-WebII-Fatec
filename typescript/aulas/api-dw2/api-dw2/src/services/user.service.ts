import { createUser, deleteUser, findAllUsers, findUserByEmail, findUserById, findUserByIdWithTasks, updateUser } from "../repositories/user.repository"
import { createUserDto, updateUserDto } from "../dtos/user.dto"
import * as bcrypt from 'bcrypt'
import * as jose from 'jose'

export const createUserService = async (data: createUserDto) => {
    const user = await findUserByEmail(data.email)
    if(user) throw new Error('E-mail já cadastrado!')

    const password = await bcrypt.hash(data.password, 10)

    return createUser({...data, password})
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

export const findUserByIdWithTasksService = async (id: number) => {
    return findUserByIdWithTasks(id)
}

export const authenticateUserService = async (email: string, password: string) => {
  const user = await findUserByEmail(email) // Busca um usuário pelo e-mail

  if (!user) throw new Error('Usuário não encontrado') // Se o usuário não existir, lança um erro


  const isValid = await bcrypt.compare(password, user.password) // Compara a senha criptografada com a senha informada

  if (!isValid) throw new Error('Senha inválida') // Se a senha for inválida, lança um erro

  const payload = { id: user.id, email: user.email } // Cria um payload com o id e o e-mail do usuário
  const secret = new TextEncoder().encode(process.env.JWT_SECRET) // Pega a chave secreta do JWT do arquivo .env - essa chave é usada para assinar o token e não deve ser exposta
  const alg = 'HS256' // Define o algoritmo de criptografia

  const token = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt() // Define a data de emissão do token
    .setIssuer('http://localhost:3000') // Define o emissor do token
    .setSubject('users') // Define o assunto do token
    .setExpirationTime('1h') // Define o tempo de expiração do token
    .sign(secret) // Assina o token com a chave secreta


  return token // Retorna o token
}