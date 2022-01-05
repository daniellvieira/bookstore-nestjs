import { Body, Controller, Get, Param, Post, UseInterceptors } from "@nestjs/common";
import { LoggingInterceptor } from "src/logging.interceptor";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@UseInterceptors(LoggingInterceptor)
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get(':username')
  public findByUsername(@Param('username') username: string) {
    const userFound = this.usersService.findByUsername(username);

    return userFound;
  }

  @Post()
  public create(@Body() user: User): User {
    const userCreated = this.usersService.create(user);

    return userCreated;
  }
} 