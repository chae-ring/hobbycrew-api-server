import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Region, Radius, Category } from '@prisma/client';

export class SignupDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nickname: string;

  @ApiProperty({ enum: Region })
  @IsEnum(Region)
  region: Region;

  @ApiProperty({ enum: Radius })
  @IsEnum(Radius)
  radius: Radius;

  @ApiProperty({ enum: Category })
  @IsEnum(Category)
  category: Category;
}

export class LoginDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
