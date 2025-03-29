import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  nickname: string;

  @ApiProperty()
  @IsString()
  region: string;

  @ApiProperty()
  @IsNumber()
  radius: number;

  @ApiProperty()
  @IsString()
  category: string;
}
