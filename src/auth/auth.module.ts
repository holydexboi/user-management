import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminModule } from '../admin/admin.module';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { AdminService } from 'src/admin/admin.service';
import { adminProvider } from 'src/admin/admin.provider';

@Module({
  imports: [
    AdminModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AdminService, ...adminProvider],
  exports: [ AuthService]
})
export class AuthModule {}
