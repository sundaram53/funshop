import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInformationListComponent } from './login-information-list.component';

describe('LoginInformationListComponent', () => {
  let component: LoginInformationListComponent;
  let fixture: ComponentFixture<LoginInformationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginInformationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginInformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
