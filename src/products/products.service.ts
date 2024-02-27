import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
//   constructor(private readonly prisma: PrismaService) {}

//   async createProduct(dto: ProductDto) {
//     return this.prisma.product.create({
//       data: {
//         name: dto.name,
//         price: dto.price,
//         description: dto.description,
//         category: {
//           connect: { id: dto.categoryId },
//         },
//       },
//     });
//   }

//   async getAllProducts() {
//     return this.prisma.product.findMany();
//   }
}
