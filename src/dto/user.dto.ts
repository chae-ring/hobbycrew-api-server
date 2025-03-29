import { IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Region, Radius, Category } from '@prisma/client';

export class GetUserDto {
  @ApiProperty()
  @IsString()
  nickname: string;

  @ApiProperty()
  @IsEnum(Region)
  region: Region;

  @ApiProperty()
  @IsEnum(Radius)
  radius: Radius;

  @ApiProperty()
  @IsEnum(Category)
  category: Category;
}
