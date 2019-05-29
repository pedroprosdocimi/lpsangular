import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociarUsuariosComponent } from './associar-usuarios.component';

describe('AssociarUsuariosComponent', () => {
  let component: AssociarUsuariosComponent;
  let fixture: ComponentFixture<AssociarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociarUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
