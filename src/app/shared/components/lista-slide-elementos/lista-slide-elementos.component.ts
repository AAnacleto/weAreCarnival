import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-slide-elementos',
  templateUrl: './lista-slide-elementos.component.html',
  styleUrls: ['./lista-slide-elementos.component.scss'],
})
export class ListaSlideElementosComponent  implements OnInit {

  @Input() listaSlide: any[] = [];

  titulo: string = "";

  opts ={
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 15,
    freeMode: true
    }

  constructor(private router: Router) { }

  ngOnInit() {}

  irParaDetalhesPesquisa(valor: any){
    console.log(valor)
    this.router.navigate(['carnival/tabs/busca/detalhes/' + valor.nome]);

  }

}
