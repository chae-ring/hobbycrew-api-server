import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app); //Swagger 문서를 생성
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  const origins = ['http://localhost:3000'];

  app.enableCors({
    origin: origins,
    credentials: true,
    methods: ['POST', 'PUT', 'GET', 'PATCH', 'DELETE'],
    optionsSuccessStatus: 200,
  });

  await app.listen(3000, '0.0.0.0'); //포트 3000에서 HTTP 요청을 수신하도록 설정
}
bootstrap();
