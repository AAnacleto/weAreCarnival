import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { CardExpansivoComponent } from './components/card-expansivo/card-expansivo.component';
import { EventoService } from './servicos/evento.service';
import { ListaModalComponent } from './components/lista-modal/lista-modal.component';
import { DetalhesModalComponent } from './components/detalhes-modal/detalhes-modal.component';
import { ListaSlideComponent } from './components/lista-slide/lista-slide.component';



@NgModule({
  declarations: [CardExpansivoComponent, ListaModalComponent, DetalhesModalComponent, ListaSlideComponent],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [CardExpansivoComponent, ListaModalComponent, DetalhesModalComponent, ListaSlideComponent],
  providers: [EventoService],

})
export class SharedModule { }
