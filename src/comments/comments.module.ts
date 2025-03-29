import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [JwtModule.register({})],
  providers: [CommentsService],
  controllers: [CommentsController]
})
export class CommentsModule {}
