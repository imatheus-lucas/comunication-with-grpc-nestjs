import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDTO } from './dto/CreateProduct.dto';
import { CreateProductService } from './services/create-product.service';
import { GetAllProductsService } from './services/get-all-products.service';
@Controller('products')
@ApiTags('Products Microservice')
export class AppController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly getAllProductService: GetAllProductsService,
  ) {}

  @Post()
  async CreateProduct(@Body() data: CreateProductDTO) {
    return this.createProductService.execute(data);
  }

  @Get()
  async GetAllProducts() {
    return this.getAllProductService.execute();
  }
}
