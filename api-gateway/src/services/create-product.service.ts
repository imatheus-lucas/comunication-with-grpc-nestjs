import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Product } from '@protos/product';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class CreateProductService {
  private productService: Product.ProductService;

  constructor(@Inject('PRODUCT_SERVICE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.productService =
      this.client.getService<Product.ProductService>('ProductService');
  }

  execute(data: any) {
    firstValueFrom(this.productService.createProduct(data));
  }
}
