import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    { dia: 'Home.dia.dia1', selecao: false, id: 1 },
    { dia: 'Home.dia.dia2', selecao: false, id: 2 },
    { dia: 'Home.dia.dia3', selecao: false, id: 3 },
    { dia: 'Home.dia.dia4', selecao: false, id: 4 },
    { dia: 'Home.dia.dia5', selecao: false, id: 5 },
    { dia: 'Home.dia.dia6', selecao: false, id: 6 },
    { dia: 'Home.dia.dia7', selecao: false, id: 7 },
  ];

  items = [
    {
      id: 1,
      name: 'Varejo 360',
      img: './assets/imagens/1.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      favorito: false,
    },
    {
      id: 2,
      name: 'A Cor Purpura',
      img: './assets/imagens/2.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Teatro do Parque - Recife',
      favorito: false,
    },
    {
      id: 3,
      name: 'A Arte do Estoicismo',
      img: './assets/imagens/3.jpg',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Online',
      favorito: false,
    },
    {
      id: 4,
      name: 'Terra por elas Convida',
      img: './assets/imagens/4.jpg',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      favorito: false,
    },
    {
      id: 5,
      name: 'Match Hall',
      img: './assets/imagens/5.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      favorito: false,
    },
    {
      id: 6,
      name: 'Varejo 360',
      img: './assets/imagens/1.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      favorito: false,
    },
    {
      id: 7,
      name: 'A Cor Purpura',
      img: './assets/imagens/2.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Teatro do Parque - Recife',
      favorito: false,
    },
    {
      id: 8,
      name: 'A Arte do Estoicismo',
      img: './assets/imagens/3.jpg',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Online',
      favorito: false,
    },
    {
      id: 9,
      name: 'Terra por elas Convida',
      img: './assets/imagens/4.jpg',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      favorito: false,
    },
    {
      id: 10,
      name: 'Match Hall',
      img: './assets/imagens/5.png',
      data: ' Qui, 09 Mar - 19:00',
      local: 'Sebrae - Recife',
      favorito: false,
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  favoritar(value: any) {
    value.favorito = !value.favorito;
    console.log(value);
  }

  irModalDetalhes(id: any) {
    this.router.navigate(['carnival/tabs/detalhes/' + id]);
  }

  eventoBotao(i: any, item: any) {
    this.diaSemana[i].selecao = !this.diaSemana[i].selecao;
    console.log(item);

    for (let index = 0; index < this.diaSemana.length; index++) {
      if (item.id != this.diaSemana[index].id) {
        this.diaSemana[index].selecao = false;
      }
    }
  }

  chamarPolosGerais(valor: any){
    if(valor === 1){
      this.eventoBotaoClickBlocos = true;
      this.eventoBotaoClickPolo = false;


    } else if (valor === 2){
      this.eventoBotaoClickPolo = true;
      this.eventoBotaoClickBlocos = false;

    }
  }

  imprimirDia(valor: any){
    console.log(valor)
  }
}
