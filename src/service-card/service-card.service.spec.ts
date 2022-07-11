import { Test, TestingModule } from '@nestjs/testing';
import { ServiceCardService } from './service-card.service';

describe('ServiceCardService', () => {
  let service: ServiceCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceCardService],
    }).compile();

    service = module.get<ServiceCardService>(ServiceCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
