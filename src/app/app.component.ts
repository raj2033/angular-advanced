import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant-app';
  isLoggedIn = false;

  constructor(private authService: AuthService, private updates: SwUpdate) {
    updates.available.subscribe((event) => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  login(): void {
    this.authService.login().subscribe((data) => {
      this.isLoggedIn = true;
    });
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
