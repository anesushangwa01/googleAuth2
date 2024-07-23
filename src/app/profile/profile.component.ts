import { Component } from '@angular/core';
import { AuthService } from '../service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getStatus().subscribe(status => {
      this.user = status.user;
    });
  }

  logout(): void {
    this.authService.logout();
  }

}
