import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class User {
  id: number;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty({
    message: 'Nome completo é obrigatório.'
  })
  full_name: string;

  dateEntry: Date;
}