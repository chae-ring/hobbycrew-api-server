import { Body, Injectable } from "@nestjs/common";
import { CreateCommentDto } from "src/dto/create-comment.dto";
import { UpdateCommentDto } from "src/dto/update-comment.dto";
import { PrismaService } from "src/prisma.service";
import { RequestUser } from "src/request-user.decorator";

@Injectable()
export class CommentsService {
  commentsService: any;
  constructor(private prisma: PrismaService) {}

  create(@Body() body: CreateCommentDto, @RequestUser() user) {
    return this.commentsService.create({ ...body, userId: user.id });
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
