import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  // this object provide nest js
  constructor(private bookService: BookService) {}

  //   public BookService: BookService = new BookService();
  // add book

  @Post('/add')
  addBook(): String {
    return this.bookService.addBook();
  }

  //delete book
  @Delete('/delete')
  deleteBook(): String {
    return this.bookService.deleteBook();
  }

  // update book
  @Put('/update')
  updateBook(): String {
    return this.bookService.updateBook();
  }

  // find all book
  @Get('/findAll')
  findAllBook(): String {
    return this.bookService.findAllBook();
  }

  // findById
  @Get('findById/:id')
  findById(@Param() params): string {
    console.log(params.id);
    return this.bookService.findById(params.id);
  }
}
