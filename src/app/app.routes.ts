import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), // Home como página inicial
	},
	{
		path: 'servicos',
		loadComponent: () => import('./pages/servicos/servicos.component').then(m => m.ServicosComponent)
	},
	{
		path: 'sobre',
		loadComponent: () => import('./pages/sobre/sobre.component').then(m => m.SobreComponent)
	},
	{
		path: 'contato',
		loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
