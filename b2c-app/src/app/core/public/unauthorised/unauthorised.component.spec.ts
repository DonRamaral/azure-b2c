import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorisedComponent } from './unauthorised.component';
import { MsalService } from '@azure/msal-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

describe('UnauthorisedComponent', () => {
  let component: UnauthorisedComponent;
  let fixture: ComponentFixture<UnauthorisedComponent>;

  let spy_msal = jasmine.createSpyObj('MsalService', ['logout']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnauthorisedComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        TranslateService,
        { provide: MsalService, useValue: spy_msal }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
