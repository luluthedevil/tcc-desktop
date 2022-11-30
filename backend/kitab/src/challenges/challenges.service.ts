import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { CreateChallengeDto } from './dto/create-challenge.dto';
//import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { Repository } from 'typeorm';
import { Challenge } from './entities/challenge.entity';

@Injectable()
export class ChallengesService {
  constructor( @InjectRepository(Challenge)
  private challengeRepository: Repository<Challenge> ) {}

  create(name: string, description: string, quantity: number): Promise<Challenge> {
    const newChallenge = this.challengeRepository.create({name, description, quantity});
    console.log(newChallenge);
    return this.challengeRepository.save(newChallenge); // insert or update
  }

  async findAll(): Promise<Challenge[]> {
    return this.challengeRepository.find({
      order: {
        quantity: "asc"
      }
    });
  }

  async findOne(id: number): Promise<Challenge> {
    try {
      const challenge = await this.challengeRepository.findOneOrFail({where: {id: id}});
      return challenge;
    } catch (err) {
      throw err;
    }
  }

  async update(id: number, name: string): Promise<Challenge> {
    const challenge = await this.findOne(id);
    challenge.name = name;
    return this.challengeRepository.save(challenge); //update
  }

  async remove(id: number): Promise<Challenge> {
    const challenge = await this.findOne(id);
    return this.challengeRepository.remove(challenge);
  }
}
