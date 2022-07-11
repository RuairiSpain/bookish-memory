import { Module } from '@nestjs/common';
import { ServiceCardService } from './service-card.service';
import { ServiceCardResolver } from './service-card.resolver';
import { DateScalar } from 'src/common/scalars/date.scalar';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceCard } from './entities/service-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceCard])],
  providers: [ServiceCardResolver, ServiceCardService, DateScalar],
})
export class ServiceCardModule {}
