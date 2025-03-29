import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { AuthModule } from '../auth/auth.module'; // ✅ 추가

@Module({
  imports: [AuthModule], // ✅ AuthModule을 imports에 추가
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
