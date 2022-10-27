import { UsersModule } from '@/users/users.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: `${process.env.SECRET}` + '',
    signOptions: { expiresIn: '3600s' },
  })],
  providers: [AuthService, LocalStrategy, JwtStategy],
  exports: [AuthService]
})
export class AuthModule {}
