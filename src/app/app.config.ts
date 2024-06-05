import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"danotes-6fc54","appId":"1:529189411600:web:33a5732258caa655822395","storageBucket":"danotes-6fc54.appspot.com","apiKey":"AIzaSyBuI1a9_yEpPGl6KCclFAEMkjOTa6mVQQI","authDomain":"danotes-6fc54.firebaseapp.com","messagingSenderId":"529189411600"})), provideFirestore(() => getFirestore())]
};
