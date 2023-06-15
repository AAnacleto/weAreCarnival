import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from './../../servicos/evento.service';
import { NavController } from "@ionic/angular";



@Component({
  selector: 'app-detalhes-modal',
  templateUrl: './detalhes-modal.component.html',
  styleUrls: ['./detalhes-modal.component.scss'],
})
export class DetalhesModalComponent  implements OnInit {

  id: any;
  objeto: any;

  itens: any = [
    { "id": 1,
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
      "favoritos": false,
      "descricao": "O Galo da Madrugada é um dos maiores blocos de carnaval do mundo, localizado em Recife, Pernambuco, Brasil. Fundado em 1978, atrai multidões com"
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
      "favoritos": false,
      "descricao": "O Galo da Madrugada é um dos maiores blocos de carnaval do mundo, localizado em Recife, Pernambuco, Brasil. Fundado em 1978, atrai multidões com "

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
      "favoritos": false,
      "descricao": "O Galo da Madrugada é um dos maiores blocos de carnaval do mundo, localizado em Recife, Pernambuco, Brasil. Fundado em 1978, atrai multidões com "

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
      "favoritos": false,
      "descricao": "O Galo da Madrugada é um dos maiores blocos de carnaval do mundo, localizado em Recife, Pernambuco, Brasil. Fundado em 1978, atrai multidões com "

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
      "favoritos": false,
      "descricao": "O Galo da Madrugada é um dos maiores blocos de carnaval do mundo, localizado em Recife, Pernambuco, Brasil. Fundado em 1978, atrai multidões com "

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
      "favoritos": false,
      "descricao": "O Galo da Madrugada é um dos maiores blocos de carnaval do mundo, localizado em Recife, Pernambuco, Brasil. Fundado em 1978, atrai multidões com seu desfile no sábado de carnaval. Com sua música animada, cores vibrantes e criatividade nas fantasias, o Galo da Madrugada representa a rica cultura pernambucana. É reconhecido como um ícone do carnaval recifense e um importante atrativo turístico da região."
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
    "favoritos": false,
    "descricao": "O bloco do Homem da Meia-Noite é uma agremiação do carnaval de Olinda, Pernambuco. Fundado em 1932, destaca-se pelo personagem do Homem da Meia-Noite, que desfila no sábado de carnaval. Com música, frevo e alegria, o bloco representa a cultura pernambucana e atrai moradores e turistas. É um símbolo do carnaval de Olinda"
  },
  {
    "id": 8,
    "name": "Pitombeira dos 4 cantos",
    "polo": "Centro",
    "endereco": {
        "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
        "nomeRua": "Estrada do Bonsucesso",
        "numero": "97",
        "bairro": "Bonsucesso",
        "cidade": "Olinda",
        "pontoReferencia": "Em frente a igreja do Rosário"
    },
    "nomeLocal": "Sede da Pitombeira dos 4 Cantos",
    "img": "./assets/imagens/9.jfif",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false,
    "descricao": "A Pitombeira dos Quatro Cantos é um dos blocos de carnaval mais tradicionais e conhecidos da cidade de Olinda em Pernambuco, Brasil. É uma agremiação popular que desfila pelas ruas da cidade durante o período do carnaval"

  }
  ]

  avaliacaoEstrela = [
    { "id": 1, "selected": false},
    { "id": 2, "selected": false},
    { "id": 3, "selected": false},
    { "id": 4, "selected": false},
    { "id": 5, "selected": false}

  ]

 constructor( private route: ActivatedRoute,
              private eventoService: EventoService,
              private navController: NavController
              ) { }

  ngOnInit() {
  this.id = this.route.snapshot.params["id"];
  this.objeto = this.itens.filter((evento: any) => evento.id === parseInt(this.id));

  // this.buscarEventosPorId();
  }

  buscarEventosPorId() {
   this.eventoService.buscarEventoPorId(this.id).subscribe( data =>{
    this.objeto = (data as any[0]);
    console.log(this.objeto);
   })
  }

  public goBack(): void {
    this.navController.back();
  }

  avaliarEvento(value: any, i){
    console.log(value);
    this.avaliacaoEstrela[i].selected = !this.avaliacaoEstrela[i].selected;
  }

  favoritarEvento(){
   this.objeto[0].favoritos = !this.objeto[0].favoritos;
  }



}
