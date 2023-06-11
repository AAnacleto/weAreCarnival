import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  images: string[] = ['url(../../../../assets/imagens/carnaval.jpg)',
  'url(../../../../assets/imagens/carnaval2.jfif)',
  'url(../../../../assets/imagens/carnaval3.jfif)',
  'url(../../../../assets/imagens/carnaval5.jpg)',
  'url(../../../../assets/imagens/carnaval6.jpg)',
  'url(../../../../assets/imagens/carnaval7.jpg)',

];

currentIndex: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    setInterval(() => {
      this.changeImage();
    }, 3000);
  }

  changeImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  irParaLogin(){
    this.router.navigate(['login']);

  }

}
