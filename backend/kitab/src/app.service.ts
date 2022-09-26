import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // customQUery(): any {
  //   return this.userRepository.createQueryBuilder("user").select("name").where("favorite")
     //make one for favorite books
  // }
}
