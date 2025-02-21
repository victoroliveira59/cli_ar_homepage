import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser'; // ✅ Importando animações
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // ✅ Importando animações

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync() // ✅ Adicionando suporte a animações no Angular
  ]
};
