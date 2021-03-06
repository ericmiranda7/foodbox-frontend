import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../common/models/User';
import { AuthService } from '../common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = '';
  password: String = '';

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    // load from local storage here
  }

  onSubmit(): void {
    console.log('calleded')
    this.authService.login(this.username, this.password)
      .subscribe({
        next: (user: User) => {
          this.authService.setUser({ username: this.username, isAdmin: false })
        },
        error: (error) => console.log(error.error.message),
        complete: () => {
          // redirect to home
          this.router.navigate([''])
          console.log('login success!')
        }
      })
  }

}
