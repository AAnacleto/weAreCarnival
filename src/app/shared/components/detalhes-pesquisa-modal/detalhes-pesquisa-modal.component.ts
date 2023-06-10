import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, NavController } from "@ionic/angular";
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detalhes-pesquisa-modal',
  templateUrl: './detalhes-pesquisa-modal.component.html',
  styleUrls: ['./detalhes-pesquisa-modal.component.scss'],
})
export class DetalhesPesquisaModalComponent  implements OnInit {


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
    { "id": 1,
      "nome": "Home.texto10",
      "imagens": [
        {"id": 1, "img": "../../../../assets/imagens/slide/turismo.jpg"},
        {"id": 2, "img": "../../../../assets/imagens/slide/turismo2.jpg"},
        {"id": 3, "img": "../../../../assets/imagens/slide/turismo3.jpg"}
      ],
      "descricao":"Recife e Olinda são cidades vizinhas localizadas no estado de Pernambuco, no nordeste do Brasil, e formam um dos destinos turísticos mais populares da região. Embora distintas, essas cidades complementam-se perfeitamente quando se trata de turismo, oferecendo aos visitantes uma experiência única."
    },
    { "id": 2, "nome": "Home.texto11", "imagem": "../../../../assets/imagens/slide/pousada.jpg"},
    { "id": 3, "nome": "Home.texto9",  "imagem": "../../../../assets/imagens/slide/restaurante.jpeg"},
    { "id": 4, "nome": "Home.texto12", "imagem": "../../../../assets/imagens/slide/fantasia.jpg"},
    { "id": 5, "nome": "Home.texto14", "imagem": "../../../../assets/imagens/slide/liricos.jpg"},
    { "id": 6, "nome": "Home.texto15", "imagem": "../../../../assets/imagens/slide/troças.png"},
    { "id": 7, "nome": "Home.texto16", "imagem": "../../../../assets/imagens/slide/maracatunacao.png"},
    { "id": 8, "nome": "Home.texto21", "imagem": "../../../../assets/imagens/slide/maracatu-rural.jpg"},
    { "id": 9, "nome": "Home.texto17", "imagem": "../../../../assets/imagens/slide/afoxé.jpeg"},
    { "id": 10, "nome": "Home.texto18", "imagem": "../../../../assets/imagens/slide/caboclinho.jpg"},
    { "id": 11, "nome": "Home.texto7",  "imagem": "../../../../assets/imagens/slide/camarote.jpg"},
    { "id": 12, "nome": "Home.texto19", "imagem": "../../../../assets/imagens/slide/infantil.png"},
    { "id": 13, "nome": "Home.texto20", "imagem": "../../../../assets/imagens/slide/tematicos.jpg"},

  ]


  placeholder: string = "";
  showPesquisa: boolean = false;
  titulo: string = "";

  showInformacao: boolean = false;

  objeto: any[] = [];

  @ViewChild(IonSlides) slides!: IonSlides;

  selectedSegment: string = 'segment1';

  slideOptions = {
    allowSlidePrev: true,
    allowSlideNext: true,


  };
  constructor(private router: Router,private navController: NavController,private route: ActivatedRoute) { }

  ngOnInit() {
    this.placeholder = "Busque o Evento ...";
    this.titulo = this.route.snapshot.params["nome"];
    this.objeto = this.listaServicos.filter((servico: any) => servico.nome === this.titulo);
    console.log(this.objeto);


  }

  handleInput(event: any) {
    this.showPesquisa = true;
    if(event.target.value === ""){this.showPesquisa = false;}
   }

   irModalDetalhes(id: any){
    this.router.navigate(['carnival/tabs/detalhes/' + id]);

  }

  public goBack(): void {
    this.navController.back();
  }

  abrirInformacoes(){
    console.log(this.showInformacao)
    this.showInformacao = !this.showInformacao;
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

  favoritar(value: any) {
    value.favoritos = !value.favoritos;
  }

}
