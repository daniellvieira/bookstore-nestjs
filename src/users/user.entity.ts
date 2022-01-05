import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUsernameUniqueness } from './is-username-uniqueness.validator';

export class User {
  id: number;

  @Expose({ name: 'nomeDeUsuario' })
  @IsUsernameUniqueness({
    message: 'O nome de usuário já está sendo utilizado.',
  })
  @IsNotEmpty({ message: 'Nome de usuário é obrigatório.' })
  @IsString({ message: 'Nome de usuário precisa ser uma string.' })
  username: string;

  @IsEmail({}, { message: 'Email precisa ser um endereço de email válido.' })
  email: string;

  @Expose({ name: 'senha' })
  @Exclude({ toPlainOnly: true })
  @IsNotEmpty({ message: 'Senha é obrigatório.' })
  password: string;

  @Expose({ name: 'nomeCompleto' })
  @IsNotEmpty({ message: 'Nome completo é obrigatório.' })
  fullName: string;

  @Expose({ name: 'dataDeEntrada' })
  joinDate: Date;
}
