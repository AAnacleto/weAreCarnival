import { EventoService } from './../../servicos/evento.service';
import { EventosNaoEncontradosException } from './../../errors/EventosNãoEncontradoException';
import { Component, Input, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';

@Component({
  selector: 'app-card-expansivo',
  templateUrl: './card-expansivo.component.html',
  styleUrls: ['./card-expansivo.component.scss'],
})
export class CardExpansivoComponent  implements OnInit {

  @Input() titulo: string = " ";
  @Input() expandirCard: boolean = false;
  @Input() mostrarCardAtracoes: boolean = false;
  @Input() listAtracoes: any[] = [];

  listaAtracoesMock = [
    { "horario": "12:00", "nome": "O Rappa", "favorito": false},
    { "horario": "13:00", "nome": "Elba Ramalho", "favorito": false},
    { "horario": "14:00", "nome": "João Bandeira", "favorito": false},
    { "horario": "15:00", "nome": "Alçeu Valença", "favorito": false},
    { "horario": "16:00", "nome": "Nação Zumbi", "favorito": false},

  ]

  spinnerShow: boolean = true;
  listEventos: Evento[] = [];

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    console.log(this.expandirCard);
  }

  expandirCardContent(){
    if(this.mostrarCardAtracoes === true){
      this.expandirCard = !this.expandirCard;
    }
  }

  eventoLike(i){
    this.listaAtracoesMock[i].favorito = !this.listaAtracoesMock[i].favorito
  }

buscarEventosPorCidade(cidade: string){
     this.eventoService.buscarEventosPorCidade(cidade).subscribe( data => {
      const eventosEncontrados = (data as Evento[]);
      if (eventosEncontrados.length === 0) {
        throw new EventosNaoEncontradosException('Nenhum evento encontrado para a cidade especificada.');
      }
      this.listEventos = eventosEncontrados;
      console.log(this.listEventos)
      this.spinnerShow = false;
     })
  }

}
