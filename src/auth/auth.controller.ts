import {Controller, Post, Request, UnauthorizedException, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthGuard} from "@nestjs/passport";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Request() req) {
        const {email, password} = req.body;
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new UnauthorizedException();
        }

        return this.authService.login(user);
    }

    @Post('registration')
    async registration(@Request() req) {
        return this.authService.registration(req.body);
    }
}
