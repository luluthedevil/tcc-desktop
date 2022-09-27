import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Library } from './entities/library.entity';

@Module({
  controllers: [LibraryController],
  imports: [
    TypeOrmModule.forFeature([Library])
  ],
  providers: [LibraryService]
})
export class LibraryModule {}
