import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreatePostDto } from 'src/dto/create-post.dto';
import { UpdatePostDto } from 'src/dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // 게시글 작성
  @Post('create')
  create(@Body() body: CreatePostDto) {
    return this.postsService.create(body);
  }

  // 전체 게시글 조회
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  // 게시글 상세 조회
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  // 게시글 수정
  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdatePostDto) {
    return this.postsService.update(+id, body);
  }

  // 게시글 삭제
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}

