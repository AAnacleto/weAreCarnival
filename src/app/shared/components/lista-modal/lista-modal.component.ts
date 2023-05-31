import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-modal',
  templateUrl: './lista-modal.component.html',
  styleUrls: ['./lista-modal.component.scss'],
})
export class ListaModalComponent  implements OnInit {

  items = [ { "name": "Varejo 360",
  "img": "./assets/imagens/1.png",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Sebrae - Recife",
  "favorito": false
},
{ "name": "A Cor Purpura",
  "img": "./assets/imagens/2.png",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Teatro do Parque - Recife",
  "favorito": false

},
{ "name": "A Arte do Estoicismo",
 "img": "./assets/imagens/3.jpg",
 "data": " Qui, 09 Mar - 19:00",
 "local": "Online",
 "favorito": false

},
{  "name": "Terra por elas Convida",
  "img": "./assets/imagens/4.jpg",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Sebrae - Recife",
  "favorito": false

},
{ "name": "Match Hall",
  "img": "./assets/imagens/5.png",
  "data": " Qui, 09 Mar - 19:00",
  "local": "Sebrae - Recife",
  "favorito": false

}
]

like: boolean = false;

  constructor() { }

  ngOnInit() {}

  favoritar(value: any){
    console.log(value)
    this.like = !this.like;
    value.favorito = !value.favorito;
    console.log(value)
  }

}
