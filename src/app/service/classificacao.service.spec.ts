/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClassificacaoService } from './classificacao.service';

describe('Service: Classificacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassificacaoService]
    });
  });

  it('should ...', inject([ClassificacaoService], (service: ClassificacaoService) => {
    expect(service).toBeTruthy();
  }));
});
