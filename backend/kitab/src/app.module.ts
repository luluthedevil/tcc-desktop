import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { Progress } from '@/progress/entities/progress.entity';
import { Library } from './library/entities/library.entity';
import { Challenge } from './challenges/entities/challenge.entity';
import { Book } from './books/entities/book.entity';
import { UsersModule } from './users/users.module';
import { ProgressModule } from './progress/progress.module';
import { LibraryModule } from './library/library.module';
import { ChallengesModule } from './challenges/challenges.module';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookAPISchema } from './books/entities/book.models';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGO_ACCESS}`),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "pguser",
      password: "pgpassword",
      database: "postgres",
      entities: [
        User, 
        Progress, 
        Library, 
        Challenge, 
        Book
      ],
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    ProgressModule,
    LibraryModule,
    ChallengesModule,
    BooksModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
