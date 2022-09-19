import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Library } from 'src/library/entities/library.entity';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pguser',
      password: 'pgpassword',
      database: 'postgres',
      entities: ['dist/src/**/*.entity.js'],
      synchronize: true,
      migrations: [
        'dist/scr/db/migrations/*.js'
      ],
      // cli: {
      //   migrationsDir: 'scr/db/migrations'
      // },
      // npm run migration:generate -- UserMigration
  }), TypeOrmModule.forFeature([Library])],
  providers: [UsersService]
})
export class UsersModule {}
