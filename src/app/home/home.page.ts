import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverComponent } from '../shared/components/language-popover/language-popover.component';
import { EventoService } from '../shared/servicos/evento.service';
import { Evento } from '../shared/models/evento';


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
  "img": "https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fgalomadrugada.jpeg?alt=media&token=88c75215-e478-47a4-8b56-2fb145658465",
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
  "img": "https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fhomemmeianoite.jpeg?alt=media&token=83117896-2660-40fb-8fa1-c71b20e8936a",
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
  "img": "https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fmaracatunacao.png?alt=media&token=ebcdb2df-813a-4886-9be6-569cccb10805",
  "data": "2024-02-10",
  "horarioSaida": "00:00",
  "diaSemana": "Sábado",
  "favoritos": false
}
]

diaSemana = [
  { dia: 'Home.dia.dia1', selecao: false, id: 1 },
  { dia: 'Home.dia.dia2', selecao: false, id: 2 },
  { dia: 'Home.dia.dia3', selecao: false, id: 3 },
  { dia: 'Home.dia.dia4', selecao: false, id: 4 },
  { dia: 'Home.dia.dia5', selecao: false, id: 5 },
  { dia: 'Home.dia.dia6', selecao: false, id: 6 },
  { dia: 'Home.dia.dia7', selecao: false, id: 7 },
];

outrasOpt =[
  { "id": 1, "nome": "Home.texto7",  "imagem": "../../../../assets/imagens/slide/camarote.jpg"},
  { "id": 2, "nome": "Home.texto19", "imagem": "../../../../assets/imagens/slide/infantil.png"},
  { "id": 3, "nome": "Home.texto10", "imagem": "../../../../assets/imagens/slide/turismo.jpg"},
  { "id": 4, "nome": "Home.texto11", "imagem": "../../../../assets/imagens/slide/pousada.jpg"},
  { "id": 5, "nome": "Home.texto9",  "imagem": "../../../../assets/imagens/slide/restaurante.jpeg"},
  { "id": 6, "nome": "Home.texto12", "imagem": "../../../../assets/imagens/slide/fantasia.jpg"},

]

opts ={
slidesPerView: 2.4,
slidesOffsetBefore: 20,
spaceBetween: 10,
freeMode: true
}

presentingElement: any = null;

showPesquisa: boolean = false;

toggleValue: boolean = false;

selectedLanguage: string = "pt";

placeholder: string = "";

listaCategoriaTrad: Evento[] = [];
listaCategoriaPrevias: Evento[] = [];
listaCategoria: Evento[] = [];


public results = [...this.items];



  constructor(private router: Router,
              private translate: TranslateService,
              private popoverCtrl: PopoverController,
              private alertCtrl: AlertController,
              private service: EventoService
              ){
    translate.setDefaultLang('pt');
    translate.use(this.selectedLanguage);
  }

  ngOnInit() {
    this.placeholder = "Busque o Evento ...";
    localStorage.setItem('LNG_KEY', 'pt');
    this.listarTradicional();
    this.listarPrevias();
  }


  irModallistEventos(id: any){
    this.router.navigate(['carnival/tabs/listaEventos/' + id]);
  }

  irModalDetalhes(id: any){
    this.router.navigate(['carnival/tabs/detalhes/' + id]);

  }

  handleInput(event: any) {
   this.showPesquisa = true;
   if(event.target.value === ""){this.showPesquisa = false;}
  }

  mostrarValor(){
    console.log(this.toggleValue)
    if(this.toggleValue === false){
      this.translate.use('pt'); // Use o idioma atual
      this.placeholder = "Busque o Evento ...";

    } else {
      this.translate.use('en'); // Use o idioma atual
      localStorage.setItem('LNG_KEY', 'en');
      this.placeholder = "Search for Event ...";


    }

  }

  async showAlert(){
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT.header'),
      message: this.translate.instant('ALERT.msg'),
      buttons: ['OK']
    });

    alert.present();
  }

  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverComponent,
      event: ev
    });

    await popover.present();
  }


  listarPrevias() {
    this.service.listarCategoria('Previas').subscribe(data => {
      this.listaCategoriaPrevias = (data as Evento[]);
    });
  }

  listarTradicional() {
    this.service.listarCategoria('Tradicional').subscribe(data => {
      this.listaCategoriaTrad = (data as Evento[]);
    })
  }


}
