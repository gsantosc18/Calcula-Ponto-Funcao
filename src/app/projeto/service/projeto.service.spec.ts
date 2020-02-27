/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjetoService } from './projeto.service';

describe('Service: Projeto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetoService]
    });
  });

  it('should ...', inject([ProjetoService], (service: ProjetoService) => {
    expect(service).toBeTruthy();
  }));
});
