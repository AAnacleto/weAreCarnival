import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';



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

  resetSenha: boolean = false;


  constructor(private router: Router,
              private alertCtrl: AlertController,
              private translate: TranslateService) { }

  ngOnInit() {
    setInterval(() => {
      this.changeImage();
    }, 3000);
  }


  irParaHome(){
    this.router.navigate(['carnival/tabs/home']);
  }

  irParaRegistro(){
    this.router.navigate(['registro']);
  }


  changeImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  redefinirSenha(){
    this.resetSenha = !this.resetSenha;
  }

  async showAlert(){
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT.header'),
      message: this.translate.instant('ALERT.msg'),
      buttons: ['OK']
    });

    alert.present();
  }


}
