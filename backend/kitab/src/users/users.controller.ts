import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from '@/auth/local-auth.guard';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
//import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.usersService.create(user.username, user.email, user.password);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('books')
  findUserBooks(@Request() req) {
    return this.usersService.findUserBooks(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('books/:bookId')
  addUserBook(@Request() req, @Param('bookId') bookId: number) {
    return this.usersService.addUserBook(req.user.id, bookId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() username: string) {
    return this.usersService.update(+id, username);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
