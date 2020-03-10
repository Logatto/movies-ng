import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor( private userService: UserService, private router: Router) { }

  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  onLogin(user: IUser){
    console.log("FORM ", user);

    this.userService.userLogin(user).subscribe( (response) => {
      console.log("response ", response);
      if(response){
        this.userService.setUser(response);
        this.router.navigate(['/favorites']);
      }
    });
  }

}
