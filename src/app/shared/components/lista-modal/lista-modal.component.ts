import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';



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
  ];

  polos: any = [];

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
    { dia: 'Quinta-feira', selecao: false, id: 1 },
    { dia: 'Sexta-feira', selecao: false, id: 2 },
    { dia: 'Sábado de Carnaval', selecao: false, id: 3 },
    { dia: 'Domingo de Carnaval', selecao: false, id: 4 },
    { dia: 'Segunda de Carnaval', selecao: false, id: 5 },
    { dia: 'Terça feira Gorda', selecao: false, id: 6 },
    { dia: 'Quarta-feira de Cinzas', selecao: false, id: 7 },
  ];

  like: boolean = false;
  cidade: number = 0;
  modalidade: number = 0;
  id: any;
  titulo: any;
  cardsBlocos: boolean = false;

  constructor(private router: Router, private navController: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    var retorno = this.diaSemana.filter(dia => dia.id === parseInt(this.id));
    this.titulo = retorno[0].dia;
    this.cidade = 1;
    this.cardsBlocos = true;


  }

  favoritar(value: any) {
    console.log(value);
    this.like = !this.like;
    value.favorito = !value.favorito;
    console.log(value);
  }

  irModalDetalhes(id: any) {
    this.router.navigate(['tabs/detalhes/' + id]);
  }

  chamarPolosGerais(valor: any) {
    this.modalidade = valor;
    console.log(valor);
    this.verificarMenu();
  }

  imprimirValor(valor: any) {
    this.cidade = valor;
    console.log(this.cidade);
    this.verificarMenu();
  }

  verificarMenu() {
    if (
      (this.cidade === 1 && this.modalidade === 3) ||
      (this.cidade === 2 && this.modalidade === 3)
    ) {
      console.log('cidade Olinda, blocos gerais');
      this.polos = [];
      this.cardsBlocos = true;
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
    console.log(this.polos);
    this.polos[i].expandir = !this.polos[i].expandir;
    console.log(this.polos);

    console.log(this.polos.expandir);
  }

  public goBack(): void {
    this.navController.back();
  }
}
