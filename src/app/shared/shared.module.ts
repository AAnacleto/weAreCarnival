import { DetalhesPesquisaModalComponent } from './components/detalhes-pesquisa-modal/detalhes-pesquisa-modal.component';
import { ListaSlideElementosComponent } from './components/lista-slide-elementos/lista-slide-elementos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { CardExpansivoComponent } from './components/card-expansivo/card-expansivo.component';
import { EventoService } from './servicos/evento.service';
import { ListaModalComponent } from './components/lista-modal/lista-modal.component';
import { DetalhesModalComponent } from './components/detalhes-modal/detalhes-modal.component';
import { ListaSlideComponent } from './components/lista-slide/lista-slide.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CardImagemComponent } from './components/card-imagem/card-imagem.component';

const components = [CardExpansivoComponent,
                    ListaModalComponent,
                    DetalhesModalComponent,
                    ListaSlideComponent,
                    ListaSlideElementosComponent,
                    CardImagemComponent,
                    DetalhesPesquisaModalComponent
                  ]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    FormsModule,
    TranslateModule
  ],
  exports: [...components],
  providers: [EventoService],

})
export class SharedModule { }
