import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Admin } from './admin.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @Inject('ADMIN_REPOSITORY')
    private adminsReposittory: typeof Admin,
    private jwtSevice: JwtService,
  ) {}

  async create(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const newPass = this.hashPassword(password);
    console.log(newPass)
    let admin = await this.adminsReposittory.create<Admin>({
      username,
      password: newPass,
    });

    const payload = { userId: admin.id, username: admin.username };

    return { access_token: await this.jwtSevice.signAsync(payload) };
  }

  async findOneByUsername(username: string): Promise<Admin> {
    return await this.adminsReposittory.findOne({
      where: { username },
    });
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }
}
