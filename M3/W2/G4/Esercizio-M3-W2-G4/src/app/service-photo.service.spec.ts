import { TestBed } from '@angular/core/testing';

import { ServicePhotoService } from './service-photo.service';

describe('ServicePhotoService', () => {
  let service: ServicePhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
