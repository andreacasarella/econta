import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

username: string;
password: string;
showSpinner: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.showSpinner = false;
  }

  login(): void {
    this.showSpinner = true;
    if (this.username === 'admin' && this.password === 'admin') {
     this.router.navigate(['user']);
    } else {
      this.showSpinner = false;
      alert('Invalid credentials');
    }
  }

}
