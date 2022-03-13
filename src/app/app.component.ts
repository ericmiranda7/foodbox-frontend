import { Component, OnInit } from '@angular/core';
import { AuthService } from './common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'foodbox';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // check localstorage here
    this.authService.checkLocalUser();
  }
}
