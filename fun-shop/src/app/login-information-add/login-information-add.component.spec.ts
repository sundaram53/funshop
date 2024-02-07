import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInformationAddComponent } from './login-information-add.component';

describe('LoginInformationAddComponent', () => {
  let component: LoginInformationAddComponent;
  let fixture: ComponentFixture<LoginInformationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginInformationAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginInformationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
