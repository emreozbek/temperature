import { TestBed, inject } from '@angular/core/testing';

import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitiesService]
    });
  });

  it('should be created', inject([CitiesService], (service: CitiesService) => {
    expect(service).toBeTruthy();
  }));


  it('should have minimum a city', inject([CitiesService], (service: CitiesService) => {
    expect(service.cities.length).toBeGreaterThan(0);
  }));

  it('should have cities', inject([CitiesService], (cities: CitiesService) => {
    expect(cities).toBeTruthy();
    cities.cities.map(item => {
      expect(item.id).toBeDefined();
      expect(item.name).toBeDefined();
    });
  }));
});
