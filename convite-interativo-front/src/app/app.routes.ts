import { Routes } from '@angular/router';
import { ConviteComponent } from './pages/convite/convite.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: '', component: ConviteComponent }, // Página inicial (convite)
  { path: 'admin', component: AdminComponent }, // Página admin
  { path: '**', redirectTo: '' }, // Redireciona qualquer rota inválida para home
];
