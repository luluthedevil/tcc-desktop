import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { CreateLibraryDto } from './dto/create-library.dto';
//import { UpdateLibraryDto } from './dto/update-library.dto';
import { Repository } from 'typeorm';
import { Library } from './entities/library.entity';

@Injectable()
export class LibraryService {
  constructor( @InjectRepository(Library)
  private libraryRepository: Repository<Library> ) {}

  create(name: string): Promise<Library> {
    const newLibrary= this.libraryRepository.create({name});
    return this.libraryRepository.save(newLibrary); // insert or update
  }

  async findAll(): Promise<Library[]> {
    return this.libraryRepository.find();
  }

  async findOne(id: number): Promise<Library> {
    try {
      const library = await this.libraryRepository.findOneOrFail({where: {id: id}});
      return library;
    } catch (err) {
      throw err;
    }
  }

  async update(id: number, name: string): Promise<Library> {
    const library = await this.findOne(id);
    library.name = name
    return this.libraryRepository.save(library); //update
  }

  async remove(id: number): Promise<Library> {
    const library = await this.findOne(id);
    return this.libraryRepository.save(library);
  }
}
