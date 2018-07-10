import { TestBed, inject } from '@angular/core/testing';

import { CoreService } from './core.service';
import {HttpClientModule} from '@angular/common/http';

describe('CoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([CoreService], (service: CoreService) => {
    expect(service).toBeTruthy();
  }));
});
