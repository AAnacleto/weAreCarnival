import { PerfilPage } from './perfil/perfil.page';
import { DetalhesModalComponent } from './shared/components/detalhes-modal/detalhes-modal.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TabsPage } from './tabs/tabs.page';
import { HomePage } from './home/home.page';
import { ListaModalComponent } from './shared/components/lista-modal/lista-modal.component';
import { FavoritosPage } from './favoritos/favoritos.page';
import { RegistroComponent } from './login/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'carnival', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
