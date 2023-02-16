import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ChallengesService } from './challenges/challenges.service';
import { Challenge } from './challenges/entities/challenge.entity';

require("dotenv").config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const challengesService = app.get(ChallengesService);
  const challenges = await challengesService.findAll();
  if(challenges.length == 0) {
    const newChallenges = [];
    let lastChallenge = 10;
    while(newChallenges.length < 10) {
      const newChallenge = {
        name: `Ler ${lastChallenge} livros`,
        description: `Completar quando o usuário ler ${lastChallenge} livros.`,
        quantity: lastChallenge,
      };
      newChallenges.push(newChallenge);
      lastChallenge = Math.round(lastChallenge * 2);
    }
    newChallenges.forEach(async challenge => await challengesService.create(challenge.name, challenge.description, challenge.quantity));
  }
  app.enableCors();
  await app.listen(3333);
}
bootstrap();
