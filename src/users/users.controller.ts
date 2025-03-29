import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserDto } from '../dto/user.dto';
import { BearerGuard } from '../bearer.guard'; // BearerGuard 임포트
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // 사용자 정보 조회
  @Get(':id')
  @UseGuards(BearerGuard) // 인증을 위한 Guard 사용
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user information by ID' })
  @ApiResponse({
    type: GetUserDto,
    description: 'User information',
  })
  async getUser(@Param('id') id: string, @Request() req): Promise<GetUserDto> {
    // 인증된 사용자 ID를 활용한 조회
    const userId = req.user.id;
    return this.userService.getUserInfo(userId); // 인증된 사용자의 정보만 가져옴
  }
}
