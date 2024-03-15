import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { adminProvider } from "./admin.provider";
import { DatabaseModule } from "src/database.module";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constant';
import { AdminController } from "src/admin/admin.controller";

@Module({
    imports: [
        DatabaseModule, 
        JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),],
    controllers: [AdminController],
    providers: [
        AdminService,
        ...adminProvider
    ]
})

export class AdminModule {}