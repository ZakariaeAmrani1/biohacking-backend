import { Test, TestingModule } from '@nestjs/testing';
import { ScannedDocumentController } from './scanned-document.controller';
import { ScannedDocumentService } from './scanned-document.service';

describe('ScannedDocumentController', () => {
  let controller: ScannedDocumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScannedDocumentController],
      providers: [ScannedDocumentService],
    }).compile();

    controller = module.get<ScannedDocumentController>(ScannedDocumentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
