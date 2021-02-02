import { TestBed } from '@angular/core/testing';

import { GetTotalBalanceService } from './get-total-balance.service';

describe('GetTotalBalanceService', () => {
  let service: GetTotalBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTotalBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
