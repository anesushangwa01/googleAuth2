import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  of } from 'rxjs';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://bookingback-01.onrender.com';

 

  constructor(private http: HttpClient, private router: Router) { }

  loginWithGoogle(): void {
    const redirectUri = encodeURIComponent('https://bookingapk.netlify.app');
    window.location.href = `${this.apiUrl}/auth/google?redirect_uri=${redirectUri}`;
  }

  getStatus(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/auth/status`).pipe(
      map(response => response),
      catchError(() => of({ isAuthenticated: false, user: null }))
    );
  }

  isAuthenticated(): boolean {
    // Check for user authentication status from the backend
    // Assuming you are storing authentication status in local storage or cookies
    const status = JSON.parse(localStorage.getItem('authStatus') || '{}');
    return status.isAuthenticated;
  }



  logout(): void {
    this.http.get(`${this.apiUrl}/auth/logout`).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}