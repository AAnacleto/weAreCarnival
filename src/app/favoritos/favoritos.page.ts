import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: 'favoritos.page.html',
  styleUrls: ['favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  diaSemana = [
    { dia: 'Quinta-feira' },
    { dia: 'Sexta-feira' },
    { dia: 'Sábado de Carnaval'},
    { dia: 'Domingo de Carnaval'},
    { dia: 'Segunda de Carnaval'},
    { dia: 'Terça feira Gorda'},
    { dia: 'Quarta-feira de Cinzas'},
  ];

items = [ { "name": "Varejo 360",
  "img": "./assets/imagens/1.png",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Sebrae - Recife",
  "favorito": true
},
{ "name": "A Cor Purpura",
  "img": "./assets/imagens/2.png",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Teatro do Parque - Recife",
  "favorito": true

},
{ "name": "A Arte do Estoicismo",
 "img": "./assets/imagens/3.jpg",
 "data": " Qui, 09 Mar - 19:00",
 "local": "Online",
 "favorito": true

},
{  "name": "Terra por elas Convida",
  "img": "./assets/imagens/4.jpg",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Sebrae - Recife",
  "favorito": true

},
{ "name": "Match Hall",
  "img": "./assets/imagens/5.png",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Sebrae - Recife",
  "favorito": true

}
]
  constructor() {}

  ngOnInit() {}

  favoritar(value: any){
    value.favorito = !value.favorito;
    console.log(value)
  }
}
