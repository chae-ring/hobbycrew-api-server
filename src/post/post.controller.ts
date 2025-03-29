import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModel } from '@prisma/client';
import {
  CreatePostDto,
  GetAllPostResponseDto,
  UpdatePostDto,
} from 'src/dto/post.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BearerGuard } from '../bearer.guard';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postsService: PostService) {}

  // 모든 포스트 조회
  @Get()
  @UseGuards(BearerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ type: GetAllPostResponseDto })
  async getAllPosts(@Request() req): Promise<PostModel[]> {
    return this.postsService.getPosts();
  }

  // 특정 포스트 조회
  @Get(':id')
  @UseGuards(BearerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get post by ID' })
  async getPostById(
    @Param('id') id: string,
    @Request() req,
  ): Promise<PostModel | null> {
    const postId = parseInt(id, 10);
    return this.postsService.getPostById(postId);
  }

  // 포스트 생성
  @Post()
  @UseGuards(BearerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create post' })
  async createPost(
    @Body() createPostDto: CreatePostDto,
    @Request() req,
  ): Promise<PostModel> {
    return this.postsService.createPost(
      createPostDto.title,
      createPostDto.content,
    );
  }

  // 포스트 수정
  @Put(':id')
  @UseGuards(BearerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update post' })
  async updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Request() req,
  ): Promise<PostModel> {
    const postId = parseInt(id, 10);
    return this.postsService.updatePost(
      postId,
      updatePostDto.title,
      updatePostDto.content,
    );
  }

  // 포스트 삭제
  @Delete(':id')
  @UseGuards(BearerGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete post' })
  async deletePost(
    @Param('id') id: string,
    @Request() req,
  ): Promise<PostModel> {
    const postId = parseInt(id, 10);
    return this.postsService.deletePost(postId);
  }
}
