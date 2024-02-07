import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginInformation } from '../login-information';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-information-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './login-information-view.component.html',
  styleUrl: './login-information-view.component.css'
})
export class LoginInformationViewComponent {

  custId!: number;
  logininfoview!: LoginInformation;

  constructor(private loginService: LoginService, 
    private route1: ActivatedRoute) { }

    ngOnInit(): void {
      console.log('view component - on init start');
      this.custId = this.route1.snapshot.params['custId'];
      this.logininfoview = new LoginInformation();

      this.loginService.getLoginInformationByCustId(this.custId).subscribe({
          next: (v) => {this.logininfoview = v, console.log(v)},
          error: (e) => console.error(e),
          complete: () => console.info('view component - complete') 
        });
      
        console.log('view component - on init end');
    }

}
