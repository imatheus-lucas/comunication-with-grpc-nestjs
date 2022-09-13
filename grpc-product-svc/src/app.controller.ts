import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Product } from '@protos/product';

import { CreateProductService } from './services/create-product.service';
import { GetAllProductsService } from './services/get-all-products.service';
@Controller()
export class AppController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly getAllProductService: GetAllProductsService,
  ) {}

  @GrpcMethod('ProductService', 'CreateProduct')
  CreateProduct(
    data: Product.CreateProductRequest,
    metadata: Metadata,
    call: ServerUnaryCall<Product.CreateProductRequest, Product.Empty>,
  ) {
    return this.createProductService.execute(data);
  }

  @GrpcMethod('ProductService', 'GetAllProducts')
  GetAllProducts(
    data: Product.Empty,
    metadata: Metadata,
    call: ServerUnaryCall<Product.Empty, Product.GetAllProductsResponse>,
  ) {
    return this.getAllProductService.execute();
  }
}
