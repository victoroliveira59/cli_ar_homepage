import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxMask } from 'ngx-mask'; // Corrigido o import
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideNgxMask(), // Adicionado corretamente
    provideAnimations()
  ]
}).catch((err) => console.error(err));
