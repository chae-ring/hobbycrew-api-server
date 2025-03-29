import { Injectable } from '@nestjs/common';
import { CreatePostDto } from 'src/dto/create-post.dto';
import { UpdatePostDto } from 'src/dto/update-post.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePostDto, userId: any) {
    return this.prisma.board.create({ 
      data: {
        title: data.title,
        content: data.content,
        category: data.category,
        location: data.location,
        user: {
          connect: { id: userId },
        },

     }
    });
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
