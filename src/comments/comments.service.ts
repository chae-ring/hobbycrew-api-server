import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCommentDto } from '../dto/comments.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async createComment(postId: number, createCommentDto: CreateCommentDto) {
    const { content } = createCommentDto;
    return this.prisma.comment.create({
      data: {
        content,
        post: {
          connect: { id: postId },
        },
      },
    });
  }
  async getCommentsByPostId(postId: number) {
    return this.prisma.comment.findMany({
      where: { postId },
    });
  }
  async deleteComment(postId: number, commentId: number) {
    return this.prisma.comment.delete({
      where: {
        id: commentId,
        postId: postId, // 댓글이 해당 게시물에 속하는지 확인
      },
    });
  }
}
