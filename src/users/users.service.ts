import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { GetUserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUserInfo(userId: number): Promise<GetUserDto> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return {
      email: user.email,
      nickname: user.nickname,
      region: user.region,
      radius: user.radius,
      category: user.category,
    };
  }
}
