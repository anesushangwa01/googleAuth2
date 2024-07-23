import { Component } from '@angular/core';
import { AuthService } from '../service';
import {ProfileComponent} from  '../profile/profile.component'
@Component({
  selector: 'app-google-auth',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './google-auth.component.html',
  styleUrl: './google-auth.component.css'
})
export class GoogleAuthComponent {
  constructor(private authService: AuthService) { }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle();
  }
}
