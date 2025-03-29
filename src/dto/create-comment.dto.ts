import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty()
  @IsInt()
  postId: number;

  @ApiProperty()
  @IsInt()
  userId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;
}
