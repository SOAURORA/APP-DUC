import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    username: '',
    password: '',
  };


  burbuja=false;
  this.burbuja= !this.burbuja
  validar () {
    if (this.user.username.length != 0) {
      if (this.user.password.length != 0) {
        console.log('Datos confirmados con exito.')

      } else {
        console.log('Sin contraseña valida')
      }
    } else {
      console.log('Sin usuario valido')
    }
  }



}
