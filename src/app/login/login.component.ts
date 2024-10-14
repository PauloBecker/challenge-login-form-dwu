import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

username: string = '';
password: string = '';
loginError: boolean = false;

constructor(private router: Router) {}

onSubmit() {

  if (this.username === 'DWU' || this.username === 'dwu' && this.password === 'DWU2024' || this.password === 'dwu2024') {
    this.router.navigate(['/formulario']);
  } else {
    this.loginError = true;
  }
}

}
