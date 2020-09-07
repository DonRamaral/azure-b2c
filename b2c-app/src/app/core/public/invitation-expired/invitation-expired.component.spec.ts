import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InvitationExpiredComponent } from './invitation-expired.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { Routes } from '@angular/router';

describe('InvitationExpiredComponent', () => {
  let component: InvitationExpiredComponent;
  let fixture: ComponentFixture<InvitationExpiredComponent>;

  const routes: Routes = [
    { path: 'login', component: LoginComponent },
  ];
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [InvitationExpiredComponent, LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
