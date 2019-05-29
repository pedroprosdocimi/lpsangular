import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarPontoControleComponent } from './avaliar-ponto-controle.component';

describe('AvaliarPontoControleComponent', () => {
  let component: AvaliarPontoControleComponent;
  let fixture: ComponentFixture<AvaliarPontoControleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliarPontoControleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliarPontoControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
