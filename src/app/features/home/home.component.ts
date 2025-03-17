import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `
    <div class="home-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Welcome to Messages App</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>
            This is a sample application built with Angular 19, NGRX, Angular Material, and Firebase.
          </p>
          <p>
            You can view and create messages by navigating to the Messages page.
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" (click)="navigateToMessages()">
            Go to Messages
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: `
    .home-container {
      display: flex;
      justify-content: center;
      margin-top: 50px;
    }
    
    mat-card {
      max-width: 600px;
    }
  `
})
export class HomeComponent {
  constructor(private router: Router) {}
  
  navigateToMessages(): void {
    this.router.navigate(['/messages']);
  }
}