import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeterAlunoComponent } from './submeter-aluno.component';

describe('SubmeterAlunoComponent', () => {
  let component: SubmeterAlunoComponent;
  let fixture: ComponentFixture<SubmeterAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmeterAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmeterAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
