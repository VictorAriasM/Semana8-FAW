import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';

export const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'tabla', component: TablaComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
];
