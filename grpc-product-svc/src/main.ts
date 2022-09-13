import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'Product',
      url: 'localhost:50051',
      protoPath: 'src/protos/product.proto',
    },
  });

  await app.listen();
}
bootstrap();
