import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
})
export class PesquisaPage implements OnInit {

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

  listaServicos =[
    { "id": 1, "nome": "Home.texto10", "imagem": "../../../../assets/imagens/slide/turismo.jpg"},
    { "id": 2, "nome": "Home.texto11", "imagem": "../../../../assets/imagens/slide/pousada.jpg"},
    { "id": 3, "nome": "Home.texto9",  "imagem": "../../../../assets/imagens/slide/restaurante.jpeg"},
    { "id": 4, "nome": "Home.texto12", "imagem": "../../../../assets/imagens/slide/fantasia.jpg"},
    { "id": 5, "nome": "Home.texto22", "imagem": "../../../../assets/imagens/slide/gastronomia.jpg"},


  ]
  listaTiposBlocos=[
    { "id": 1, "nome": "Home.texto14", "imagem": "../../../../assets/imagens/slide/liricos.jpg"},
    { "id": 2, "nome": "Home.texto15", "imagem": "../../../../assets/imagens/slide/troças.png"},
    { "id": 3, "nome": "Home.texto16", "imagem": "../../../../assets/imagens/slide/maracatunacao.png"},
    { "id": 4, "nome": "Home.texto21", "imagem": "../../../../assets/imagens/slide/maracatu-rural.jpg"},
    { "id": 5, "nome": "Home.texto17", "imagem": "../../../../assets/imagens/slide/afoxé.jpeg"},
    { "id": 6, "nome": "Home.texto18", "imagem": "../../../../assets/imagens/slide/caboclinho.jpg"},
    { "id": 7, "nome": "Home.texto7",  "imagem": "../../../../assets/imagens/slide/camarote.jpg"},
    { "id": 8, "nome": "Home.texto19", "imagem": "../../../../assets/imagens/slide/infantil.png"},
    { "id": 9, "nome": "Home.texto20", "imagem": "../../../../assets/imagens/slide/tematicos.jpg"},


  ]

  placeholder: string = "";
  showPesquisa: boolean = false;

  @ViewChild(IonSlides) slides!: IonSlides;

  selectedSegment: string = 'segment1';

  slideOptions = {
    allowSlidePrev: true,
    allowSlideNext: true,


  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.placeholder = "Busque o Evento ...";

  }

  handleInput(event: any) {
    this.showPesquisa = true;
    if(event.target.value === ""){this.showPesquisa = false;}
   }

   irModalDetalhes(id: any){
    this.router.navigate(['carnival/tabs/detalhes/' + id]);

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

    }
    return 0;
  }

  irParaDetalhesPesquisa(valor: any){
    console.log(valor)
    this.router.navigate(['carnival/tabs/busca/detalhes/' + valor.nome]);

  }

}
