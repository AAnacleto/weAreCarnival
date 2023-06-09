import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-slide-elementos',
  templateUrl: './lista-slide-elementos.component.html',
  styleUrls: ['./lista-slide-elementos.component.scss'],
})
export class ListaSlideElementosComponent  implements OnInit {

  opts ={
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 15,
    freeMode: true
    }

  constructor() { }

  ngOnInit() {}

}
