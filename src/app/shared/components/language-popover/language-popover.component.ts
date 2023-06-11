import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguageService } from '../../servicos/language.service';

@Component({
  selector: 'app-language-popover',
  templateUrl: './language-popover.component.html',
  styleUrls: ['./language-popover.component.scss'],
})
export class LanguagePopoverComponent  implements OnInit {

  languages: any[] = [];
  selected = '';

  constructor(private popoverCtrl: PopoverController,
              private languageService: LanguageService) { }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
    console.log(this.languages)
    this.selected = this.languageService.selected
  }

  select(lng){
    this.languageService.setLanguages(lng);
    this.popoverCtrl.dismiss();
  }
}
