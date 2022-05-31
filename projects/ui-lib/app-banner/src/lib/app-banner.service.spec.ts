import { TestBed } from '@angular/core/testing';

import { AppBannerService } from './app-banner.service';

describe('AppBannerService', () => {
  let service: AppBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
