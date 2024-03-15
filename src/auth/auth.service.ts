import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private jwtSevice: JwtService,
  ) {}

  async signin(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const admin = await this.adminService.findOneByUsername(username);

    const match = await this.comparePassword(password, admin?.password);

    if (!match) {
      throw new UnauthorizedException();
    }

    const payload = { userId: admin.id, username: admin.username };

    return { access_token: await this.jwtSevice.signAsync(payload) };
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }
}
