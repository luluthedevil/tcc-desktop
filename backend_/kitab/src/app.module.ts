import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { ChallengesModule } from './challenges/challenges.module';
import { LibraryModule } from './library/library.module';
import { ProgressModule } from './progress/progress.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BooksModule, ChallengesModule, LibraryModule, ProgressModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
