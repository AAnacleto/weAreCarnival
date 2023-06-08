import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  carouselContainer: HTMLElement | null = document.querySelector('.top');

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


  irParaHome(){
    this.router.navigate(['carnival/tabs/home']);
  }


  changeImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }


}
