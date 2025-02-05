import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-favoritos',
  templateUrl: 'favoritos.page.html',
  styleUrls: ['favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  // eventoBotaoClick: boolean = false;
  eventoBotaoClickPolo: boolean = false;
  eventoBotaoClickBlocos: boolean = false;
  diaSemana = [
    { dia: 'Home.dia.dia1', selecao: "segment1", id: 1 },
    { dia: 'Home.dia.dia2', selecao: "segment2", id: 2 },
    { dia: 'Home.dia.dia3', selecao: "segment3", id: 3 },
    { dia: 'Home.dia.dia4', selecao: "segment4", id: 4 },
    { dia: 'Home.dia.dia5', selecao: "segment5", id: 5 },
    { dia: 'Home.dia.dia6', selecao: "segment6", id: 6 },
    { dia: 'Home.dia.dia7', selecao: "segment7", id: 7 },
  ];

  items = [
    {
      id: 1,
      name: 'Varejo 360',
      img: './assets/imagens/1.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      favorito: true,
    },
    {
      id: 2,
      name: 'A Cor Purpura',
      img: './assets/imagens/2.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Teatro do Parque - Recife',
      favorito: true,
    },
    {
      id: 3,
      name: 'A Arte do Estoicismo',
      img: './assets/imagens/3.jpg',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Online',
      favorito: true,
    },
    {
      id: 4,
      name: 'Terra por elas Convida',
      img: './assets/imagens/4.jpg',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      favorito: true,
    },
    {
      id: 5,
      name: 'Match Hall',
      img: './assets/imagens/5.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      favorito: true,
    },
    {
      id: 6,
      name: 'Varejo 360',
      img: './assets/imagens/1.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      favorito: true,
    },
    {
      id: 7,
      name: 'A Cor Purpura',
      img: './assets/imagens/2.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Teatro do Parque - Recife',
      favorito: true,
    },
    {
      id: 8,
      name: 'A Arte do Estoicismo',
      img: './assets/imagens/3.jpg',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Online',
      favorito: true,
    },
    {
      id: 9,
      name: 'Terra por elas Convida',
      img: './assets/imagens/4.jpg',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      favorito: true,
    },
    {
      id: 10,
      name: 'Match Hall',
      img: './assets/imagens/5.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      favorito: true,
    },
  ];


  @ViewChild(IonSlides) slides!: IonSlides;

  selectedSegment: string = " ";

  slideOptions = {
    allowSlidePrev: true,
    allowSlideNext: true,


  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.selectedSegment = "segment1"

  }

  favoritar(value: any) {
    value.favorito = !value.favorito;
    console.log(value);
  }

  irModalDetalhes(id: any) {
    this.router.navigate(['carnival/tabs/detalhes/' + id]);
  }

  // eventoBotao(i: any, item: any) {
  //   this.diaSemana[i].selecao = !this.diaSemana[i].selecao;
  //   console.log(item);

  //   for (let index = 0; index < this.diaSemana.length; index++) {
  //     if (item.id != this.diaSemana[index].id) {
  //       this.diaSemana[index].selecao = false;
  //     }
  //   }
  // }

  // chamarPolosGerais(valor: any){
  //   if(valor === 1){
  //     this.eventoBotaoClickBlocos = true;
  //     this.eventoBotaoClickPolo = false;


  //   } else if (valor === 2){
  //     this.eventoBotaoClickPolo = true;
  //     this.eventoBotaoClickBlocos = false;

  //   }
  // }

  imprimirDia(valor: any){
    console.log(valor)
    console.log(this.selectedSegment);

    // this.selectedSegment = valor.id;
  }

  onSegmentChange() {
    this.slides.slideTo(this.getSegmentIndex());
  }

 onSlideChange = async () =>  {
    const activeIndex = await this.slides.getActiveIndex(); // Aguarda a resolução da Promise
    this.selectedSegment = 'segment' + (activeIndex + 1);

 }

  getSegmentIndex(): number {

    switch (this.selectedSegment) {
      case 'segment1':
        return 0;
      case 'segment2':
        return 1;
      case 'segment3':
        return 2;
      case 'segment4':
        return 3;
      case 'segment5':
        return 4;
      case 'segment6':
        return 5;
      case 'segment7':
        return 6;

    }
    return 0;
  }
}
