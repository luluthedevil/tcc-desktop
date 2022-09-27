import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { CreateProgressDto } from './dto/create-progress.dto';
//import { UpdateProgressDto } from './dto/update-progress.dto';
import { Repository } from 'typeorm';
import { Progress } from './entities/progress.entity';

@Injectable()
export class ProgressService {
  constructor( @InjectRepository(Progress)
    private progressRepository: Repository<Progress>
    ) {}
  create(progress: string): Promise<Progress> {
    const newProgress = this.progressRepository.create({progress});
    return this.progressRepository.save(newProgress); // insert or update
  }

  async findAll(): Promise<Progress[]> {
    return this.progressRepository.find();
  }

  async findOne(id: number): Promise<Progress> {
    try {
      const progress = await this.progressRepository.findOneOrFail({where: {id: id}});
      return progress;
    } catch (err) {
      throw err;
    }
  }

  async update(id: number, progress: string): Promise<Progress> {
    const Progress = await this.findOne(id);
    Progress.progress = progress;
    return this.progressRepository.save(Progress); //update
  }

  async remove(id: number): Promise<Progress> {
    const progress = await this.findOne(id);
    return this.progressRepository.remove(progress);
  }
}
