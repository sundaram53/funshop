import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginInformation } from '../login-information';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-information-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './login-information-list.component.html',
  styleUrl: './login-information-list.component.css'
})
export class LoginInformationListComponent {
  
  //   ﻿Quick Fix
  // Add 'undefined' type to property 'logininformations'
  // Add definite assignment assertion to property 'logininformations: LoginInformation[];'
  // Add initializer to property 'logininformations'
   logininformations: LoginInformation[] | undefined;
  // logininformations!: LoginInformation[];
  // logininformations: LoginInformation[] = [];

  constructor(private loginService: LoginService, 
    private router1: Router) { }

  ngOnInit(): void {
    this.getLoginInformations();
  }

  private getLoginInformations()
  {
    this.loginService.getLoginInformationList().subscribe(data => {
      this.logininformations = data;
    });
  }

  updateLoginInformationByCustId(custId: number){
    this.router1.navigate(['updatelogininfo', custId]);
  }

  deleteLoginInformationByCustId(custId: number){
    console.log('deleteLoginInformationByCustId start');
    this.loginService.deleteLoginInformationByCustId(custId).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('delete - complete') 
    });
    this.getLoginInformations();
    console.log('deleteLoginInformationByCustId end');
  }

  viewLoginInformationByCustId(custId: number){
    this.router1.navigate(['viewlogininfo', custId]);
  }

}
