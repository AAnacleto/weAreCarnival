import { FavoritosPage } from './../favoritos/favoritos.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { PerfilPage } from '../perfil/perfil.page';
import { HomePage } from '../home/home.page';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PesquisaPage } from '../pesquisa/pesquisa.page';
import { InformacoesPage } from '../informacoes/informacoes.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [
    TabsPage,
    FavoritosPage,
    PerfilPage,
    HomePage,
    PesquisaPage,
    InformacoesPage
  ],
  exports: [
    FavoritosPage,
    PerfilPage,
    HomePage,
    PesquisaPage,
    InformacoesPage
  ]
})
export class TabsPageModule {}
