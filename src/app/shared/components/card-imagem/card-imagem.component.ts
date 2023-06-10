import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-imagem',
  templateUrl: './card-imagem.component.html',
  styleUrls: ['./card-imagem.component.scss'],
})
export class CardImagemComponent  implements OnInit {

  // @Input() listaRecebe: any[] = [];

  @Input() nome: string = "";
  @Input() imagem: string = "";


  constructor() { }

  ngOnInit() {}

}
