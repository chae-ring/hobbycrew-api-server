import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CreateCommentDto } from "src/dto/create-comment.dto";
import { UpdateCommentDto } from "src/dto/update-comment.dto";

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  
  // 댓글 생성
  @Post('create')
  create(@Body() body: CreateCommentDto) {
    return this.commentsService.create(body);
  }

  // 댓글 목록 조회
  @Get('/post/:postId')
  findByPost(@Param('postId') postId: string) {
    return this.commentsService.findByPost(+postId);
  }

  // 댓글 수정
  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateCommentDto) {
    return this.commentsService.update(+id, body);
  }

  // 댓글 삭제
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
