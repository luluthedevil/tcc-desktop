import { Module } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { ChallengesController } from './challenges.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ChallengesController],
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
  providers: [ChallengesService]
})
export class ChallengesModule {}
