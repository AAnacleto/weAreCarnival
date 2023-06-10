import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalhesPesquisaModalComponent } from './detalhes-pesquisa-modal.component';

describe('DetalhesPesquisaModalComponent', () => {
  let component: DetalhesPesquisaModalComponent;
  let fixture: ComponentFixture<DetalhesPesquisaModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesPesquisaModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesPesquisaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
