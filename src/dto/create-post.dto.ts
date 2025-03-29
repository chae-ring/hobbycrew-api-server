import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum, IsOptional, IsInt } from 'class-validator';

export enum Category {
  운동 = '운동',
  스터디 = '스터디',
  취미 = '취미',
  기타 = '기타',
}

export class CreatePostDto {
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ enum: Category })
  @IsEnum(Category)
  category: Category;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  location?: string;
}
