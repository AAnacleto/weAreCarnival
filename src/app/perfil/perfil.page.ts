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


  preview(files : any, event : any){
    if(files.length ===0){
     return;
    }

    let mimeType = files[0].type;
    if(mimeType.match(/image\/*/) == null){
      return;
    }

    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
     this.imgUrl = reader.result;
    }

  }

  logOut(){
    this.router.navigate(['login']);
  }

}
