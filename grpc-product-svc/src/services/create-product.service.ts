import { Injectable } from '@nestjs/common';
import { Product } from '@protos/product';

import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CreateProductService {
  constructor(private readonly prisma: PrismaService) {}
  async execute({
    name,
    description,
    price,
  }: Product.CreateProductRequest): Promise<void> {
    await this.prisma.product.create({
      data: {
        name,
        description,
        price,
      },
    });
  }
}
