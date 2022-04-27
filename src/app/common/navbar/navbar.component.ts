import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: String = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.user) {
      this.authService.user.subscribe((user) => this.username = user.username)
    }
  }

  onLogout(): void {
    this.authService.logout();
  }

}
