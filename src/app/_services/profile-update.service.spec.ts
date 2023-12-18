/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfileUpdateService } from './profile-update.service';

describe('Service: ProfileUpdate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileUpdateService]
    });
  });

  it('should ...', inject([ProfileUpdateService], (service: ProfileUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
