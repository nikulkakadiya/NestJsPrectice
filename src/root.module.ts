import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { BookService } from './book.service';
// import { BookController } from './app.controller';
// import { BookService } from './book.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [BookController],
  providers: [BookService],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
