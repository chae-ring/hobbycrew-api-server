import {
  Controller,
  Get,
  Post as PostRequest,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from '@prisma/client';
import {
  CreatePostDto,
  GetAllPostResponseDto,
  UpdatePostDto,
} from 'src/dto/post.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts') // '/posts' 경로로 들어오는 요청을 처리
export class PostController {
  constructor(private readonly postsService: PostService) {}

  // 모든 포스트 조회
  @Get()
  @ApiOperation({ summary: 'get all posts' })
  @ApiResponse({ type: GetAllPostResponseDto })
  async getAllPosts(): Promise<Post[]> {
    return this.postsService.getPosts();
  }

  // 특정 포스트 조회
  @Get(':id')
  @ApiOperation({ summary: 'get post of id' })
  async getPostById(@Param('id') id: string): Promise<Post | null> {
    const postId = parseInt(id, 10);

    return this.postsService.getPostById(postId);
  }

  // 포스트 생성
  @PostRequest()
  @ApiOperation({ summary: 'Create post' })
  async createPost(@Body() createPostDto: CreatePostDto): Promise<Post> {
    return this.postsService.createPost(
      createPostDto.title,
      createPostDto.content,
    );
  }

  // 포스트 수정
  @Put(':id')
  @ApiOperation({ summary: 'Upload post' })
  async updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<Post> {
    const postId = parseInt(id, 10);

    return this.postsService.updatePost(
      postId,
      updatePostDto.title,
      updatePostDto.content,
    );
  }

  // 포스트 삭제
  @Delete(':id')
  @ApiOperation({ summary: 'delete post' })
  async deletePost(@Param('id') id: string): Promise<Post> {
    const postId = parseInt(id, 10);
    return this.postsService.deletePost(postId);
  }
}
