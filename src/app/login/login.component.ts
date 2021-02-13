import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  providers = AuthProvider;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSuccess(): void {
    this.router.navigate(['/overview']);
  }
}
