import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../../servicos/evento.service';
import { Evento } from '../../models/evento';



@Component({
  selector: 'app-lista-modal',
  templateUrl: './lista-modal.component.html',
  styleUrls: ['./lista-modal.component.scss'],
})
export class ListaModalComponent implements OnInit {
  items = [
    {
      id: 1,
      name: 'Varejo 360',
      img: './assets/imagens/1.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      cidade: 'Olinda',
      favorito: false,
    },
    {
      id: 2,
      name: 'A Cor Purpura',
      img: './assets/imagens/2.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Teatro do Parque - Recife',
      cidade: 'Olinda',
      favorito: false,
    },
    {
      id: 3,
      name: 'A Arte do Estoicismo',
      img: './assets/imagens/3.jpg',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Online',
      cidade: 'Recife',
      favorito: false,
    },
    {
      id: 4,
      name: 'Terra por elas Convida',
      img: './assets/imagens/4.jpg',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      cidade: 'Recife',
      favorito: false,
    },
    {
      id: 5,
      name: 'Match Hall',
      img: './assets/imagens/5.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      cidade: 'Recife',
      favorito: false,
    },
  ];

  polos: any = [];

  eventos: any = [];

  polosOlinda = [
    { polo: 'Polo Carmo', expandir: false },
    { polo: 'Polo Varadouro', expandir: false },
    { polo: 'Polo Guadalupe', expandir: false },
    { polo: 'Polo Alto da Sé', expandir: false },
    { polo: 'Polo Rio Doce', expandir: false },
    { polo: 'Polo Alafin Oyó', expandir: false },
    { polo: 'Polo Xambá', expandir: false },
    { polo: 'Polo Casa da Rabeca', expandir: false },
    { polo: 'Infantis', expandir: false },
  ];

  polosRecife = [
    { polo: 'Polo Marco Zero', expandir: false },
    { polo: 'Polo Arsenal' , expandir: false},
    { polo: 'Polo Samba na Moeda', expandir: false },
    { polo: 'Polo Polo da Indepedencia', expandir: false },
    { polo: 'Polo Patio de São Pedro', expandir: false },
    { polo: 'Polo Novo Cais', expandir: false },
    { polo: 'Polo Corredor Comunitário', expandir: false },
    { polo: 'Polo Três Carneiros' , expandir: false},
    { polo: 'Polo Morro da Conceição', expandir: false },
    { polo: 'Polo Rua da Moeda', expandir: false },
    { polo: 'Polo Patio do Terço', expandir: false },
    { polo: 'Infantis' , expandir: false},
    { polo: 'Mercado Boa Vista' , expandir: false},
  ];

  diaSemana = [
    { dia: 'Home.dia.dia1', selecao: false, id: 1 },
    { dia: 'Home.dia.dia2', selecao: false, id: 2 },
    { dia: 'Home.dia.dia3', selecao: false, id: 3 },
    { dia: 'Home.dia.dia4', selecao: false, id: 4 },
    { dia: 'Home.dia.dia5', selecao: false, id: 5 },
    { dia: 'Home.dia.dia6', selecao: false, id: 6 },
    { dia: 'Home.dia.dia7', selecao: false, id: 7 },
  ];

  like: boolean = false;
  cidade: number = 0;
  modalidade: number = 0;
  id: any;
  titulo: any;
  cardsBlocos: boolean = false;
  indice: number = 0;

  @ViewChild(IonSlides) slides!: IonSlides;

  selectedSegment: string = 'segment1';

  slideOptions = {
    allowSlidePrev: true,
    allowSlideNext: true,


  };

  constructor(private router: Router, private navController: NavController, private route: ActivatedRoute, private service: EventoService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    var retorno = this.diaSemana.filter(dia => dia.id === parseInt(this.id));
    this.titulo = retorno[0].dia;
    this.cidade = 1;
    this.modalidade = 3;
    this.cardsBlocos = true;
    // this.eventos = this.items.filter( buscar => buscar.cidade === 'Olinda');
    this.listarDiaCidade('Olinda');

  }

  favoritar(value: any) {
    this.like = !this.like;
    value.favorito = !value.favorito;
  }

  irModalDetalhes(id: any) {
    this.router.navigate(['carnival/tabs/detalhes/' + id]);
  }

  chamarPolosGerais(valor: any) {
    this.modalidade = valor;
    this.verificarMenu();
  }

  imprimirValor(valor: any) {
    this.cidade = valor;
    this.verificarMenu();
  }

  verificarMenu() {
    if ( this.cidade === 1 && this.modalidade === 3){
       console.log('cidade Olinda, blocos gerais');
       this.polos = [];
       this.cardsBlocos = true;
      //  this.eventos = this.items.filter( buscar => buscar.cidade === 'Olinda');
      this.listarDiaCidade('Olinda');

    } else if (this.cidade === 2 && this.modalidade === 3){
       console.log('cidade Recife, blocos gerais');
       this.polos = [];
       this.cardsBlocos = true;
      //  this.eventos = this.items.filter( buscar => buscar.cidade === 'Recife');
      this.listarDiaCidade('Recife')

    } else if (this.cidade === 1 && this.modalidade === 4) {
      console.log('cidade Olinda, Polos');
      this.polos = this.polosOlinda;
      this.cardsBlocos = false;
    } else if (this.cidade === 2 && this.modalidade === 4) {
      console.log('cidade Recife, Polos');
      this.polos = this.polosRecife;
      this.cardsBlocos = false;
    }
  }

  expandirCardEvent(i: any){
    console.log(i)
    this.indice = i;
    this.polos[i].expandir = !this.polos[i].expandir;
  }

  public goBack(): void {
    this.navController.back();
  }

  onSegmentChange() {
    this.slides.slideTo(this.getSegmentIndex());
  }

 onSlideChange = async () =>  {
    const activeIndex = await this.slides.getActiveIndex(); // Aguarda a resolução da Promise
    this.selectedSegment = 'segment' + (activeIndex + 1);
    if(this.selectedSegment === 'segment1'){
      this.cidade = 1;
    } else {
      this.cidade = 2;
    }
    this.verificarMenu()
 }

  getSegmentIndex(): number {
    switch (this.selectedSegment) {
      case 'segment1':
        return 0;
      case 'segment2':
        return 1;

    }
    return 0;
  }


  getDay(): number {
    switch (this.titulo) {
      case 'Home.dia.dia1':
        return 1;
      case 'Home.dia.dia2':
        return 2;
      case 'Home.dia.dia3':
        return 3;
      case 'Home.dia.dia4':
        return 4;
      case 'Home.dia.dia5':
        return 5;
      case 'Home.dia.dia6':
        return 6;
      case 'Home.dia.dia7':
        return 7;
    }
    return 0;
  }

  listarDiaCidade(cidade: string) {
    const diaInt = this.getDay();
    console.log(diaInt)
    this.service.listarDiaCidade(diaInt, cidade).subscribe(data => {
      this.eventos = (data as Evento[]);
    })
  }
}
