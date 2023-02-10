import { TestBed } from '@angular/core/testing';

import { AbsensesService } from './absenses.service';

describe('AbsensesService', () => {
  let service: AbsensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
