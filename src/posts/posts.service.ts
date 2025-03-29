import { Body, Injectable } from '@nestjs/common';
import { CreatePostDto } from 'src/dto/create-post.dto';
import { UpdatePostDto } from 'src/dto/update-post.dto';
import { PrismaService } from 'src/prisma.service';
import { RequestUser } from 'src/request-user.decorator';

@Injectable()
export class PostsService {
  postsService: any;
  constructor(private prisma: PrismaService) {}

  create(@Body() body: CreatePostDto, @RequestUser() user) {
      return this.postsService.create({ ...body, userId: user.id });
    }

  findAll() {
    return this.prisma.board.findMany({
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: number) {
    return this.prisma.board.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  update(id: number, data: UpdatePostDto) {
    return this.prisma.board.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.board.delete({ where: { id } });
  }
}
