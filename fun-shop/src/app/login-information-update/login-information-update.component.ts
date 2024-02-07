import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginInformation } from '../login-information';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-information-update',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './login-information-update.component.html',
  styleUrl: './login-information-update.component.css'
})
export class LoginInformationUpdateComponent {

  custId!: number;
  logininfoupdate!: LoginInformation;

  constructor(private loginService: LoginService, 
    private router1: Router,
    private route1: ActivatedRoute) { }

    ngOnInit(): void {
      console.log('update component - on init start');
      this.custId = this.route1.snapshot.params['custId'];
      this.logininfoupdate = new LoginInformation();

      this.loginService.getLoginInformationByCustId(this.custId).subscribe({
          next: (v) => {this.logininfoupdate = v, console.log(v)},
          error: (e) => console.error(e),
          complete: () => console.info('update component - complete') 
        });
      
        console.log('update component - on init end');
    }

    private updateLoginInformation()
    {
      console.log('update component - updateLoginInformation start');
      this.loginService.updateLoginInformationByCustId(this.custId, this.logininfoupdate).subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('update component - complete') 
      });
      console.log('update component - updateLoginInformation end');
    }
  
    gotoLoginInformationList(){
      this.router1.navigate(['/listlogininfo']);
    }
  
    onSubmit(){
      console.log('update component - on submit 1');
      console.log(this.logininfoupdate);
      console.log('update component - on submit 2');
      this.updateLoginInformation();
      this.gotoLoginInformationList();
      console.log('update component - on submit 3');
    }

}
