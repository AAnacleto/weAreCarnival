import { PerfilPage } from './perfil/perfil.page';
import { DetalhesModalComponent } from './shared/components/detalhes-modal/detalhes-modal.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TabsPage } from './tabs/tabs.page';
import { HomePage } from './home/home.page';
import { ListaModalComponent } from './shared/components/lista-modal/lista-modal.component';
import { FavoritosPage } from './favoritos/favoritos.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'carnival', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  // { path: 'tabs', component: TabsPage,
  //   children: [
  //     { path: 'home', component: HomePage },
  //     { path: 'listaEventos/:id', component: ListaModalComponent},
  //     { path: 'detalhes/:id', component: DetalhesModalComponent},
  //     { path: 'favoritos', component: FavoritosPage},
  //     { path: 'perfil', component: PerfilPage}
  //    ]
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
