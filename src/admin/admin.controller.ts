import { Body, Controller, Get, NotFoundException, Param, Post, Query, UseGuards } from "@nestjs/common";
import { AdminService } from "./admin.service";


@Controller('admins')
export class AdminController {
    constructor (private readonly userService: AdminService) {}

    @Post('create-admin')
    async create(@Body() admin: Record<string, any>) {
        return await this.userService.create(admin.id, admin.username, admin.password)
    }
}