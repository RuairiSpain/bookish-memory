import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { ServiceCardService } from './service-card.service';
import { ServiceCard } from './entities/service-card.entity';
import { CreateServiceCardInput } from './dto/create-service-card.input';
import { UpdateServiceCardInput } from './dto/update-service-card.input';
import { PubSub } from 'graphql-subscriptions';
import { NotFoundException } from '@nestjs/common';

const pubSub = new PubSub();

@Resolver(() => ServiceCard)
export class ServiceCardResolver {
  constructor(private readonly serviceCardService: ServiceCardService) {}

  @Mutation(() => ServiceCard)
  createServiceCard(
    @Args('createServiceCardInput')
    createServiceCardInput: CreateServiceCardInput,
  ) {
    const added = this.serviceCardService.create(createServiceCardInput);
    pubSub.publish('serviceCardAdded', { recipeAdded: added });
    return added;
  }

  @Query(() => [ServiceCard], { name: 'serviceCard' })
  findAll() {
    return this.serviceCardService.findAll();
  }

  @Query(() => ServiceCard, { name: 'serviceCard' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    const user = await this.serviceCardService.findOne(id);
    if (!user) {
      throw new NotFoundException(`Service #${id} not found`);
    }
    return user;
  }

  @Mutation(() => ServiceCard)
  updateServiceCard(
    @Args('updateServiceCardInput')
    updateServiceCardInput: UpdateServiceCardInput,
  ) {
    const updated = this.serviceCardService.update(
      updateServiceCardInput.id,
      updateServiceCardInput,
    );
    pubSub.publish('serviceCardUpdated', { serviceCardUpdated: updated });
    return updated;
  }

  @Mutation(() => ServiceCard)
  removeServiceCard(@Args('id', { type: () => String }) id: string) {
    const removed = this.serviceCardService.remove(id);
    pubSub.publish('serviceCardRemoved', { serviceCardRemoved: removed });
    return removed;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Subscription((returns) => ServiceCard)
  serviceCardAdded() {
    return pubSub.asyncIterator('serviceCardAdded');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Subscription((returns) => ServiceCard)
  serviceCardUpdated() {
    return pubSub.asyncIterator('serviceCardUpdated');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Subscription((returns) => ServiceCard)
  serviceCardRemoved() {
    return pubSub.asyncIterator('serviceCardRemoved');
  }
}
