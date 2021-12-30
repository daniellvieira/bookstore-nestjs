import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './books/book.model';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'bookstore',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Book])
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
