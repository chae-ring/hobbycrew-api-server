import { Injectable } from "@nestjs/common";
import { CreateCommentDto } from "src/dto/create-comment.dto";
import { UpdateCommentDto } from "src/dto/update-comment.dto";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  create(body: CreateCommentDto, data: CreateCommentDto & { userId: any; }) {
    return this.prisma.comment.create({
      data: {
        postId: data.postId,
        content: data.content,
        user: {
          connect: { id: data.userId }, 
        },
        
      },
    });
  }
  

  findByPost(postId: number) {
    return this.prisma.comment.findMany({
      where: { postId },
      include: { user: true },
    });
  }

  update(id: number, data: UpdateCommentDto) {
    return this.prisma.comment.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.comment.delete({ where: { id } });
  }
}
