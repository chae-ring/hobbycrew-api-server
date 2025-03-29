import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from '../dto/comments.dto';
import { Comment } from '@prisma/client';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BearerGuard } from '../bearer.guard';

@ApiTags('Comments')
@Controller('posts/:postId/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @UseGuards(BearerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create comment' })
  async createComment(
    @Param('postId') postId: string,
    @Body() createCommentDto: CreateCommentDto,
    @Request() req,
  ): Promise<Comment> {
    const pId = parseInt(postId, 10);
    return this.commentsService.createComment(pId, createCommentDto);
  }

  @Get()
  @UseGuards(BearerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get comments for a post' })
  async getComments(@Param('postId') postId: string, @Request() req) {
    const pId = parseInt(postId, 10);
    return this.commentsService.getCommentsByPostId(pId);
  }

  @Delete(':commentId')
  @UseGuards(BearerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete comment' })
  async deleteComment(
    @Param('postId') postId: string,
    @Param('commentId') commentId: string,
    @Request() req,
  ) {
    const pId = parseInt(postId, 10);
    const cId = parseInt(commentId, 10);
    return this.commentsService.deleteComment(pId, cId);
  }
}
