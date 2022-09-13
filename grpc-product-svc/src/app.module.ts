import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { CreateProductService } from './services/create-product.service';
import { GetAllProductsService } from './services/get-all-products.service';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [CreateProductService, GetAllProductsService],
})
export class AppModule {}
