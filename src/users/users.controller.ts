import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

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