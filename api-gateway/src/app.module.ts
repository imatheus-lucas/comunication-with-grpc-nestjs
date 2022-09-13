import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { CreateProductService } from './services/create-product.service';
import { GetAllProductsService } from './services/get-all-products.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'Product',
          protoPath: 'src/protos/product.proto',
          url: 'localhost:50051',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [CreateProductService, GetAllProductsService],
})
export class AppModule {}
