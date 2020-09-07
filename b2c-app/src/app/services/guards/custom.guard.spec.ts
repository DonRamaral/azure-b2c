import { TestBed, async, inject } from '@angular/core/testing';

import { CustomGuard } from './custom.guard';

describe('CustomGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomGuard]
    });
  });

  it('should ...', inject([CustomGuard], (guard: CustomGuard) => {
    expect(guard).toBeTruthy();
  }));
});
