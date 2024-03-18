import { Test, TestingModule } from '@nestjs/testing';
import { SubdivisiController } from './subdivisi.controller';
import { SubdivisiService } from './subdivisi.service';

describe('SubdivisiController', () => {
  let controller: SubdivisiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubdivisiController],
      providers: [SubdivisiService],
    }).compile();

    controller = module.get<SubdivisiController>(SubdivisiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
