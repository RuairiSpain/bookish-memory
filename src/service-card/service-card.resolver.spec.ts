import { Test, TestingModule } from '@nestjs/testing';
import { ServiceCardResolver } from './service-card.resolver';
import { ServiceCardService } from './service-card.service';

describe('ServiceCardResolver', () => {
  let resolver: ServiceCardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceCardResolver, ServiceCardService],
    }).compile();

    resolver = module.get<ServiceCardResolver>(ServiceCardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
