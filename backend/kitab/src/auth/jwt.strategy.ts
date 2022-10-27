import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy) {
    constructor() {
        const secret = `${process.env.SECRET}` + '';
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret,
            secretOrPrivateKey: secret,
        });
    }
    async validate(payload: any) {
        // const user = await this.userService.findOne(payload.sub)
        return {
            id: payload.sub,
            name: payload.name
            // ...user
        };
    }
}