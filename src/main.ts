import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ✅ CORS 설정 추가 (중요)
  app.enableCors({
    origin: 'http://3.34.6.208:3000', // React 개발 서버 주소
    credentials: true,
  });

  setupSwagger(app); //Swagger 문서를 생성
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(3000, '0.0.0.0'); //포트 3000에서 HTTP 요청을 수신하도록 설정
}
bootstrap();
