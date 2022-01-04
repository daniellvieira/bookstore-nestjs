import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUsernameUniqueness } from "./is-username-uniqueness.validator";

export class User {
  id: number;

  @IsUsernameUniqueness({ message: 'O nome de usuário já está sendo utilizado.' })
  @IsNotEmpty({ message: 'Nome de usuário é obrigatório.' })
  @IsString({ message: 'Nome de usuário precisa ser uma string.' })
  username: string;

  @IsEmail({}, { message: 'Email precisa ser um endereço de email válido.' })
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatório.' })
  password: string;

  @IsNotEmpty({ message: 'Nome completo é obrigatório.' })
  full_name: string;

  dateEntry: Date;
}