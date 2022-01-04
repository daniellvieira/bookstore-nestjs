import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';
import { UsersService } from './users.service';

@Injectable()
@ValidatorConstraint()
export class IsUsernameUniquenessConstraint implements ValidatorConstraintInterface {
  constructor(private usersService: UsersService) {}

  validate(username: string, validationArguments?: ValidationArguments): boolean {
    return !!!this.usersService.findByUsername(username);
  }
}

export function IsUsernameUniqueness(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUsernameUniquenessConstraint,
    });
  };
}