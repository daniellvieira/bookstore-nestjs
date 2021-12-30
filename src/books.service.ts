import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "./book.model";

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findOne({
      where: { id },
    });
  }

  async create(book: Book) {
    this.bookModel.create(book);
  }

  async update(book: Book): Promise<[number, Book[]]> {
    return this.bookModel.update(book, {
      where: { id: book.id },
    });
  }

  async delete(id: string): Promise<void> {
    const book: Book = await this.findOne(id);
    await book.destroy();
  }
}