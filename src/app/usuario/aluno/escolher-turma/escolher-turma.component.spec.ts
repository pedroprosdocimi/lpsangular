import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherTurmaComponent } from './escolher-turma.component';

describe('EscolherTurmaComponent', () => {
  let component: EscolherTurmaComponent;
  let fixture: ComponentFixture<EscolherTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolherTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
