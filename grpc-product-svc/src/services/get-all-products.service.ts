import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
@Injectable()
export class GetAllProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async execute() {
    const products = await this.prisma.product.findMany();

    return {
      products,
    };
  }
}
