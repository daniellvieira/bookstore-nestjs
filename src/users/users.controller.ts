import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post
} from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get(':username')
  public findByUsername(@Param('username') username: string) {
    const userFound = this.usersService.findByUsername(username);

    if (!userFound) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Usuário não encontrado.'
      });
    };
    return userFound;
  }

  @Post()
  public create(@Body() user: User): NestResponse {
    const userCreated = this.usersService.create(user);

    return new NestResponseBuilder()
      .with_status(HttpStatus.CREATED)
      .with_headers({'Location': `/users/${userCreated.username}`})
      .with_body(userCreated)
      .build();
  }
}