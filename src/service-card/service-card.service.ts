import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';

import { CreateServiceCardInput } from './dto/create-service-card.input';
import { UpdateServiceCardInput } from './dto/update-service-card.input';
import { ServiceCard } from './entities/service-card.entity';

@Injectable()
export class ServiceCardService {
  constructor(
    @InjectRepository(ServiceCard)
    private serviceCardRepository: Repository<ServiceCard>,
  ) {}

  create(createServiceCardInput: CreateServiceCardInput) {
    const serviceCard = this.serviceCardRepository.create(
      createServiceCardInput,
    );
    return this.serviceCardRepository.save(serviceCard);
  }

  findAll() {
    return this.serviceCardRepository.find();
  }

  findOne(id: string) {
    return this.serviceCardRepository.findOne({
      where: [{ id }],
      order: { createdAt: 'DESC' },
    });
  }

  // Uses fulltext searching in Postgres
  search(query: string) {
    return getManager()
      .createQueryBuilder()
      .select('service')
      .from(ServiceCard, 'service')
      .where(
        `to_tsvector(service.description || ' ' || service.title) @@ to_tsquery(:query)`,
        { query },
      )
      .getMany();
  }

  async update(
    id: string,
    updateServiceCardInput: UpdateServiceCardInput,
  ): Promise<ServiceCard> {
    const user = await this.serviceCardRepository.preload({
      id,
      ...updateServiceCardInput,
    });
    if (!user) {
      throw new NotFoundException(`Service ${id} not found`);
    }
    return this.serviceCardRepository.save(user);
  }

  async remove(id: string): Promise<ServiceCard> {
    const serviceCard = await this.findOne(id);
    await this.serviceCardRepository.remove(serviceCard);
    return {
      id: null,
      name: '',
      description: '',
      organization: '',
      email: '',
    } as ServiceCard;
  }
}
