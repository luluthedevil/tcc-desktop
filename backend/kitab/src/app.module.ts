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

@Module({
  imports: [
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
    // TypeOrmModule.forFeature([
    //   User, 
    //   Progress, 
    //   Library, 
    //   Challenge, 
    //   Book
    // ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
