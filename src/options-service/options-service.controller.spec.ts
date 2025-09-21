import { Test, TestingModule } from '@nestjs/testing';
import { OptionsServiceController } from './options-service.controller';
import { OptionsServiceService } from './options-service.service';

describe('OptionsServiceController', () => {
  let controller: OptionsServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OptionsServiceController],
      providers: [OptionsServiceService],
    }).compile();

    controller = module.get<OptionsServiceController>(OptionsServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
