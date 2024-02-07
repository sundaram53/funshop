import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginInformation } from '../login-information';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-information-add',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './login-information-add.component.html',
  styleUrl: './login-information-add.component.css'
})
export class LoginInformationAddComponent {

  logininfonew: LoginInformation = new LoginInformation();

  constructor(private loginService: LoginService, 
    private router1: Router) { }

  ngOnInit(): void {
    console.log('add component - on init start');
    console.log('add component - on init end');
  }

  private saveLoginInformation()
  {
    console.log('add component - saveLoginInformation start');
    this.loginService.createLoginInformation(this.logininfonew).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('add component - complete') 
    });
    console.log('add component - saveLoginInformation end');
  }

  gotoLoginInformationList(){
    this.router1.navigate(['/listlogininfo']);
  }

  onSubmit(){
    console.log('add component - on submit 1');
    console.log(this.logininfonew);
    console.log('add component - on submit 2');
    this.saveLoginInformation();
    this.gotoLoginInformationList();
    console.log('add component - on submit 3');
  }

}
