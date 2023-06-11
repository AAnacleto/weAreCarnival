import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const LNG_KEY = 'pt';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  selected = 'pt';


  constructor(private translate: TranslateService) { }

  setInitialAppLanguage(){
    this.translate.setDefaultLang('pt');
    localStorage.setItem('LNG_KEY', 'pt');
  }

getLanguages(){
    return [
      { text: 'Português', value: 'pt', img: '../../../../assets/imagens/flags/brasil.png'},
      { text: 'English', value: 'en', img: '../../../../assets/imagens/flags/eua.png'},

    ]
  }

  setLanguages(lng){
    this.translate.use(lng);
    this.selected = lng;
    localStorage.setItem('LNG_KEY', lng);
  }
 }
