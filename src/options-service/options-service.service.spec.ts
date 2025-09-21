import { Test, TestingModule } from '@nestjs/testing';
import { OptionsServiceService } from './options-service.service';

describe('OptionsServiceService', () => {
  let service: OptionsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OptionsServiceService],
    }).compile();

    service = module.get<OptionsServiceService>(OptionsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
