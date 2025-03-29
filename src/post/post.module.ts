import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { AuthModule } from '../auth/auth.module'; // 추가

@Module({
  imports: [AuthModule], // JwtService를 제공하는 AuthModule을 추가
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
