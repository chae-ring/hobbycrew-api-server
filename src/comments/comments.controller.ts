import { Controller, Post, Body, Param, Get, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from '../dto/comments.dto';
import { Comment } from '@prisma/client';

@Controller('posts/:postId/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async createComment(
    @Param('postId') postId: string,
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<Comment> {
    const pId = parseInt(postId, 10);
    return this.commentsService.createComment(pId, createCommentDto);
  }
  @Get()
  async getComments(@Param('postId') postId: string) {
    const pId = parseInt(postId, 10);
    return this.commentsService.getCommentsByPostId(pId);
  }
  @Delete(':commentId')
  async deleteComment(
    @Param('postId') postId: string,
    @Param('commentId') commentId: string,
  ) {
    const pId = parseInt(postId, 10);
    const cId = parseInt(commentId, 10);

    return this.commentsService.deleteComment(pId, cId);
  }
}
