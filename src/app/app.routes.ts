import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'servicos',
    loadComponent: () => import('./pages/servicos/servicos.component').then(m => m.ServicosComponent)
  },
  {
    path: 'servicos/:slug',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre.component').then(m => m.SobreComponent)
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent)
  },
  {
    path: 'perguntas-frequentes',
    loadComponent: () => import('./pages/faq-areas/faq-areas.component').then(m => m.FaqAreasComponent)
  },
  {
    path: 'faq',
    redirectTo: 'perguntas-frequentes',
    pathMatch: 'full'
  },
  {
    path: 'areas-atendidas',
    redirectTo: 'perguntas-frequentes',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
