import { Routes } from '@angular/router';
import { LoginInformationListComponent } from './login-information-list/login-information-list.component';
import { LoginInformationAddComponent } from './login-information-add/login-information-add.component';
import { LoginInformationUpdateComponent } from './login-information-update/login-information-update.component';
import { LoginInformationViewComponent } from './login-information-view/login-information-view.component';

export const routes: Routes = [
    { path: 'listlogininfo', component: LoginInformationListComponent },
    { path: 'addlogininfo', component: LoginInformationAddComponent },
    { path: 'updatelogininfo/:custId', component: LoginInformationUpdateComponent },
    { path: 'viewlogininfo/:custId', component: LoginInformationViewComponent },
    { path: '', redirectTo: 'listlogininfo', pathMatch: 'full' }
];
