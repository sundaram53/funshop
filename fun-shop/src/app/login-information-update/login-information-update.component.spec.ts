import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInformationUpdateComponent } from './login-information-update.component';

describe('LoginInformationUpdateComponent', () => {
  let component: LoginInformationUpdateComponent;
  let fixture: ComponentFixture<LoginInformationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginInformationUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginInformationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
