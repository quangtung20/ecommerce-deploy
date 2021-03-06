import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartRepository } from './cart.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CartRepository])
  ],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule { }
