import { Module } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { ProgressController } from './progress.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProgressController],
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
  providers: [ProgressService]
})
export class ProgressModule {}
