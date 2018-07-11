import { TestBed, inject } from '@angular/core/testing';

import { DateUtilService } from './date.service';

describe('DateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateUtilService]
    });
  });

  it('should be created', inject([DateUtilService], (service: DateUtilService) => {
    expect(service).toBeTruthy();
  }));
});
