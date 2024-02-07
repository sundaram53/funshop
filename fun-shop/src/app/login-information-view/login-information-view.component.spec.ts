import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInformationViewComponent } from './login-information-view.component';

describe('LoginInformationViewComponent', () => {
  let component: LoginInformationViewComponent;
  let fixture: ComponentFixture<LoginInformationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginInformationViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginInformationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
