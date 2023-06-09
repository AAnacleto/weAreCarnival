import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss']
})
export class PerfilPage {
  imagePath: any;
  imgUrl: any;


  constructor(private router: Router) {}

  //Falta fazer o formulário e o serviço de update.


  logOut(){
    this.router.navigate(['login']);
  }

}
