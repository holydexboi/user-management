import { Body, Controller, Get, NotFoundException, Param, Post, Query, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./create-user.dto";
import { User as UserEntity } from "./user.entity";
import { AuthGuard } from "src/auth/auth.guard";
import { Console } from "console";

@Controller('users')
export class UsersController {
    constructor (private readonly userService: UserService) {}

    @Get('get-user')
    async findAll(){
        return await this.userService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get('get-user/:id')
    async findOne(@Param('id') id: number): Promise<UserEntity> {
        const user = await this.userService.findOne(id)

        if(!user) {
            throw new NotFoundException('No user with the given id')
        }

        return user
    }

    @UseGuards(AuthGuard)
    @Post('add-user')
    async create(@Body() user: UserDto, ): Promise<UserEntity> {
        const newUser =  await this.userService.create(user)
        console.log(newUser)
        return newUser
    }
}