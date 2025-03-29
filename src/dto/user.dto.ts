import { IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Region, Radius, Category } from '@prisma/client';

export class GetUserDto {
  @ApiProperty()
  @IsString()
  nickname: string;

  @ApiProperty()
  @IsEnum(Region) // Prisma에서 정의한 Region enum 사용
  region: Region;

  @ApiProperty()
  @IsEnum(Radius) // Prisma에서 정의한 Radius enum 사용
  radius: Radius;

  @ApiProperty()
  @IsEnum(Category) // Prisma에서 정의한 Category enum 사용
  category: Category;
}
