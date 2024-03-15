import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UserService } from "./user.service";
import { userProvider } from "./user.provider";
import { DatabaseModule } from "src/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        UserService,
        ...userProvider
    ]
})

export class UserModule {}