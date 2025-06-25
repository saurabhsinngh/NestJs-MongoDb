import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/nestDb'), BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
