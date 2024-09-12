import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.page.html',
  styleUrls: ['./password-change.page.scss'],
})
export class PasswordChangePage implements OnInit {



  ngOnInit() {
  }

  user: {
    username: string,
    password: string,
  };
  
  constructor(){
    this.user = {
      username: '',
      password: ''
    }
  }
    

}
