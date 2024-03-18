import { Test, TestingModule } from '@nestjs/testing';
import { SubdivisiService } from './subdivisi.service';

describe('SubdivisiService', () => {
  let service: SubdivisiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubdivisiService],
    }).compile();

    service = module.get<SubdivisiService>(SubdivisiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
