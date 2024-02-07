import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginInformationListComponent } from "./login-information-list/login-information-list.component";
import { LoginInformationAddComponent } from './login-information-add/login-information-add.component';
import { LoginInformationUpdateComponent } from './login-information-update/login-information-update.component';
import { LoginInformationViewComponent } from './login-information-view/login-information-view.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule, 
      RouterModule,
      RouterOutlet, 
      HttpClientModule, 
      LoginInformationListComponent,
      LoginInformationAddComponent,
      LoginInformationUpdateComponent,
      LoginInformationViewComponent
    ]
})
export class AppComponent {
  title = 'Fun Shop';

}
