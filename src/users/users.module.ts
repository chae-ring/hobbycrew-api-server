import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { BearerGuard } from '../bearer.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, BearerGuard],
})
export class UsersModule {}
