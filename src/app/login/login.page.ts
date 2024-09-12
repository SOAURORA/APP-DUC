import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: {
    username: string,
    password: string,
  };
  

  ngOnInit() {
  }
  
  burbuja = false;

  constructor(private router : Router){
    this.user = {
      username: '',
      password: ''
    }
  }

  validar() {
    if (!this.user.username) {
      console.log('Sin usuario');
      return;
    }
  
    if (!this.user.password) {
      console.log('Sin contraseña');
      return;
    }

    console.log('Información válida con éxito');

    const navigationExtras: NavigationExtras = {
      state: {
        user: this.user.username,
        pass: this.user.password
      }
    };

    this.cambiarSpin();

    setTimeout(() => {
      this.router.navigate(['/home'], navigationExtras);
      this.cambiarSpin();
    }, 3500);
  
    this.cambiarSpin();
  
    setTimeout(() => {
      this.router.navigate(['/home'], navigationExtras);
      this.cambiarSpin();
    }, 3500);
  }
  

  cambiarSpin(){
    this.burbuja = !this.burbuja
  }



}