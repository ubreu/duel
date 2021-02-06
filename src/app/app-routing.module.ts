import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from 'ngx-auth-firebaseui';
import { LoginComponent } from './login/login.component';

import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'overview', component: OverviewComponent, canActivate: [LoggedInGuard] }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }