import { Module } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { ChallengesController } from './challenges.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Challenge } from './entities/challenge.entity';

@Module({
  controllers: [ChallengesController],
  imports: [
    TypeOrmModule.forFeature([Challenge])
  ],
  providers: [ChallengesService]
})
export class ChallengesModule {}
