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

  it('should be handle date', inject([DateUtilService], (service: DateUtilService) => {
    expect(service.UTCSecondsToDate(1369824698)).toEqual(jasmine.any(Date));
  }));
});
