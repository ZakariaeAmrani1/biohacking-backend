import { Test, TestingModule } from '@nestjs/testing';
import { ScannedDocumentService } from './scanned-document.service';

describe('ScannedDocumentService', () => {
  let service: ScannedDocumentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScannedDocumentService],
    }).compile();

    service = module.get<ScannedDocumentService>(ScannedDocumentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
