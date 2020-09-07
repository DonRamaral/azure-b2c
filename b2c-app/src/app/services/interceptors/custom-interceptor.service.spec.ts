import { TestBed } from '@angular/core/testing';
import { MsalService } from '@azure/msal-angular';

import { RomeInterceptorService } from './rome-interceptor.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('RomeInterceptorService', () => {

  let spy_msal = jasmine.createSpyObj('MsalService', ['logout']);


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: MsalService, useValue: spy_msal }
      ]
    });
  });

  it('should be created', () => {
    const service: RomeInterceptorService = TestBed.get(RomeInterceptorService);
    expect(service).toBeTruthy();
  });
});
