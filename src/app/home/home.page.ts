import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  items = [ {
  "id": 1,
  "name": "Varejo 360",
  "polo": "Polo recife antigo",
  "endereco": {
      "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
      "nomeRua": "Rua Recife Antigo",
      "numero": "97",
      "bairro": "São José",
      "cidade": "Recife",
      "pontoReferencia": "Próximo a accenture"
  },
  "nomeLocal": "Rua da hora",
  "img": "./assets/imagens/1.png",
  "data": "2024-02-10",
  "horarioSaida": "00:00",
  "diaSemana": "Sábado",
  "favoritos": false
},
{
  "id": 2,
  "name": "A Cor Purpura",
  "polo": "Polo recife antigo",
  "endereco": {
      "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
      "nomeRua": "Rua Recife Antigo",
      "numero": "97",
      "bairro": "São José",
      "cidade": "Recife",
      "pontoReferencia": "Próximo a accenture"
  },
  "nomeLocal": "Rua da hora",
  "img": "./assets/imagens/2.png",
  "data": "2024-02-10",
  "horarioSaida": "00:00",
  "diaSemana": "Sábado",
  "favoritos": false
},
{
 "id": 3,
 "name": "A Arte do Estoicismo",
 "polo": "Polo recife antigo",
  "endereco": {
      "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
      "nomeRua": "Rua Recife Antigo",
      "numero": "97",
      "bairro": "São José",
      "cidade": "Recife",
      "pontoReferencia": "Próximo a accenture"
  },
  "nomeLocal": "Rua da hora",
  "img": "./assets/imagens/3.jpg",
  "data": "2024-02-10",
  "horarioSaida": "00:00",
  "diaSemana": "Sábado",
  "favoritos": false
},
{
  "id": 4,
  "name": "Terra por elas Convida",
  "polo": "Polo recife antigo",
  "endereco": {
      "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
      "nomeRua": "Rua Recife Antigo",
      "numero": "97",
      "bairro": "São José",
      "cidade": "Recife",
      "pontoReferencia": "Próximo a accenture"
  },
  "nomeLocal": "Rua da hora",
  "img": "./assets/imagens/4.jpg",
  "data": "2024-02-10",
  "horarioSaida": "00:00",
  "diaSemana": "Sábado",
  "favoritos": false

},
{
  "id": 5,
  "name": "Match Hall",
  "polo": "Polo recife antigo",
  "endereco": {
      "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
      "nomeRua": "Rua Recife Antigo",
      "numero": "97",
      "bairro": "São José",
      "cidade": "Recife",
      "pontoReferencia": "Próximo a accenture"
  },
  "nomeLocal": "Rua da hora",
  "img": "./assets/imagens/5.png",
  "data": "2024-02-10",
  "horarioSaida": "00:00",
  "diaSemana": "Sábado",
  "favoritos": false

},
{
  "id": 6,
  "name": "Galo da Madrugada",
  "polo": "Polo recife antigo",
  "endereco": {
      "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
      "nomeRua": "Rua Recife Antigo",
      "numero": "97",
      "bairro": "São José",
      "cidade": "Recife",
      "pontoReferencia": "Próximo a accenture"
  },
  "nomeLocal": "Rua da hora",
  "img": "./assets/imagens/7.jpg",
  "data": "2024-02-10",
  "horarioSaida": "00:00",
  "diaSemana": "Sábado",
  "favoritos": false
},
{
  "id": 7,
  "name": "Homem da Meia Noite",
  "polo": "Polo Bonsucesso",
  "endereco": {
      "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
      "nomeRua": "Estrada do Bonsucesso",
      "numero": "97",
      "bairro": "Bonsucesso",
      "cidade": "Olinda",
      "pontoReferencia": "Em frente a igreja do Rosário"
  },
  "nomeLocal": "Sede do Homem da meia noite",
  "img": "./assets/imagens/8.jpg",
  "data": "2024-02-10",
  "horarioSaida": "00:00",
  "diaSemana": "Sábado",
  "favoritos": false
},
{
  "id": 8,
  "name": "Pitombeira",
  "polo": "Centro",
  "endereco": {
      "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
      "nomeRua": "Estrada do Bonsucesso",
      "numero": "97",
      "bairro": "Bonsucesso",
      "cidade": "Olinda",
      "pontoReferencia": "Em frente a igreja do Rosário"
  },
  "nomeLocal": "Sede da Pitombeira",
  "img": "./assets/imagens/9.jfif",
  "data": "2024-02-10",
  "horarioSaida": "00:00",
  "diaSemana": "Sábado",
  "favoritos": false
}
]

diaSemana = [
  { dia: 'Quinta-feira', selecao: false, id: 1 },
  { dia: 'Sexta-feira', selecao: false, id: 2 },
  { dia: 'Sábado de Carnaval', selecao: false, id: 3 },
  { dia: 'Domingo de Carnaval', selecao: false, id: 4 },
  { dia: 'Segunda de Carnaval', selecao: false, id: 5 },
  { dia: 'Terça feira Gorda', selecao: false, id: 6 },
  { dia: 'Quarta-feira de Cinzas', selecao: false, id: 7 },
];

opts ={
slidesPerView: 2.4,
slidesOffsetBefore: 20,
spaceBetween: 10,
freeMode: true
}

presentingElement: any = null;

showPesquisa: boolean = false;

public results = [...this.items];



  constructor(private router: Router){

  }

  ngOnInit() {

  }


  irModallistEventos(id: any){
    this.router.navigate(['tabs/listaEventos/' + id]);
  }

  irModalDetalhes(id: any){
    this.router.navigate(['tabs/detalhes/' + id]);
  }

  handleInput(event: any) {
   this.showPesquisa = true;
   if(event.target.value === ""){this.showPesquisa = false;}
  }





}
