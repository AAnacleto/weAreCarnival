import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosPage } from '../favoritos/favoritos.page';
import { HomePage } from '../home/home.page';
import { PerfilPage } from '../perfil/perfil.page';
import { DetalhesModalComponent } from '../shared/components/detalhes-modal/detalhes-modal.component';
import { ListaModalComponent } from '../shared/components/lista-modal/lista-modal.component';
import { TabsPage } from './tabs.page';
import { PesquisaPage } from '../pesquisa/pesquisa.page';
import { InformacoesPage } from '../informacoes/informacoes.page';
import { DetalhesPesquisaModalComponent } from '../shared/components/detalhes-pesquisa-modal/detalhes-pesquisa-modal.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      {
        path: 'home',
        component: HomePage,

      },
      {
        path: 'listaEventos/:id',
        component: ListaModalComponent,
      },
      {
        path: 'detalhes/:id',
        component: DetalhesModalComponent,
      },
      {
        path: 'favoritos',
        component: FavoritosPage,

      },
      {
        path: 'perfil',
        component: PerfilPage,

      },
      {
        path: 'pesquisa',
        component: PesquisaPage,

      },
      {
        path: 'info',
        component: InformacoesPage,

      },
      {
        path: 'busca/detalhes/:nome',
        component: DetalhesPesquisaModalComponent,

      }

    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
