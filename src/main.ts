import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxMask } from 'ngx-mask'; // Corrigido o import

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideNgxMask() // Adicionado corretamente
  ]
}).catch((err) => console.error(err));
