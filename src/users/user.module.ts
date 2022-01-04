import { Module } from "@nestjs/common";
import { IsUsernameUniquenessConstraint } from "./is-username-uniqueness.validator";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  controllers: [ UsersController, ],
  providers: [
    UsersService,
    IsUsernameUniquenessConstraint,
  ]
})

export class UserModule {}