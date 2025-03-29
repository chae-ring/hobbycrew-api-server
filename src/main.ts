import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    orgin: 'http://localhost:3000',
    //origin: 'http://ec2-3-34-6-208.ap-northeast-2.compute.amazonaws.com',
    credentials: true,
  });

  setupSwagger(app); //Swagger 문서를 생성
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(3000, '0.0.0.0'); //포트 3000에서 HTTP 요청을 수신하도록 설정
}
bootstrap();
