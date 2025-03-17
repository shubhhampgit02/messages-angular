import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { routes } from './app.routes';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

const firebaseConfig = {
  apiKey: 'AIzaSyB5dwBv_hC0CecwjaNy7hU7GrNsRyVLQS0',
  authDomain: 'messages-743c7.firebaseapp.com',
  projectId: 'messages-743c7',
  storageBucket: 'messages-743c7.firebasestorage.app',
  messagingSenderId: '820157711123',
  appId: '1:820157711123:web:d10f8989605163a89d90e6',
  measurementId: 'G-RYT4ETEWMD',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(MatSnackBarModule),

    // NGRX providers
    provideStore(),
    provideEffects(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),

    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true,
        backdropClass: 'dialog-backdrop',
        panelClass: 'light-dialog',
      },
    },

    // Firebase providers
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
