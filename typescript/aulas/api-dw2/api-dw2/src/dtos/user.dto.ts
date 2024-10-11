import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class createUserDto {
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser parâmetro vazio"})
    name!: string // ! = obrigatório

    @IsEmail()
    email!: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password!: string
}   

export class updateUserDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string  // ? = opcional

    @IsOptional()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password?: string
}