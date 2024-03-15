import { Inject, Injectable } from "@nestjs/common";
import { UserDto } from "./create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private usersReposittory: typeof User
    ){}

    async findAll(): Promise<User[]> {
        return await this.usersReposittory.findAll<User>()
    }

    async create(user: UserDto): Promise<User> {
        return await this.usersReposittory.create<User>({...user})
    }

    async findOne(id): Promise<User> {
        return await this.usersReposittory.findOne({
                where: { id }
        })
    }
}
