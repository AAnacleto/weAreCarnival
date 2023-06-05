import { Component, OnInit, Input} from '@angular/core';
import { Evento } from '../../models/evento';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-slide',
  templateUrl: './lista-slide.component.html',
  styleUrls: ['./lista-slide.component.scss'],
})
export class ListaSlideComponent  implements OnInit {

  @Input() listaSlide: Evento[] = [];

  @Input() titulo: string = "";

  opts ={
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 10,
    freeMode: true
    }

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.listaSlide)
  }

  irModalDetalhes(id: any){
    this.router.navigate(['tabs/detalhes/' + id]);
  }

}
