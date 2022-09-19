import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BooksController],
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'pguser',
    password: 'pgpassword',
    database: 'postgres',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true,
})],
  providers: [BooksService]
})
export class BooksModule {}
