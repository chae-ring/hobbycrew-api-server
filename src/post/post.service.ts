import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Post } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  //포스트 생성
  async createPost(title: string, content: string): Promise<Post> {
    return this.prisma.post.create({
      data: { title, content },
    });
  }
  //포스트 다 조회
  async getPosts(): Promise<Post[]> {
    return this.prisma.post.findMany(); //배열 형태로 반환
  }
  // 특정 포스트 조회
  async getPostById(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }
  //포스트 수정
  async updatePost(id: number, title: string, content: string): Promise<Post> {
    return this.prisma.post.update({
      //update는 수정
      where: { id },
      data: {
        title,
        content,
      },
    });
  }

  //포스트 삭제
  async deletePost(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
