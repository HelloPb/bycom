import { TestBed } from '@angular/core/testing';

import { AppUpdatesService } from './app-updates.service';

describe('AppUpdatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppUpdatesService = TestBed.get(AppUpdatesService);
    expect(service).toBeTruthy();
  });
});
