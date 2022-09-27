import { Module } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { ProgressController } from './progress.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Progress } from './entities/progress.entity';

@Module({
  controllers: [ProgressController],
  imports: [
    TypeOrmModule.forFeature([Progress])
  ],
  providers: [ProgressService]
})
export class ProgressModule {}
