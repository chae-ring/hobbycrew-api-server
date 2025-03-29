import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsDate } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'post title', type: String })
  @IsString()
  title: string;

  @ApiProperty({ description: 'post content', type: String })
  @IsString()
  content: string;
}
export class UpdatePostDto {
  @ApiProperty({ description: 'post title', type: String })
  @IsString()
  title: string;

  @ApiProperty({ description: 'post content', type: String })
  @IsString()
  content: string;
}
export class GetAllPostResponseDto {
  @ApiProperty({ description: 'The unique identifier for the post' })
  @IsInt()
  id: number;

  @ApiProperty({ description: 'The title of the post' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'The content of the post' })
  @IsString()
  content: string;

  @ApiProperty({ description: 'The timestamp of when the post was created' })
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    description: 'The timestamp of when the post was last updated',
  })
  @IsDate()
  updatedAt: Date;
}
