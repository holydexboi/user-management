import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) {}


    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signin(@Body() signinDto: Record<string, any>) {
        return await this.authService.signin(signinDto.username, signinDto.password)
    }
    
}