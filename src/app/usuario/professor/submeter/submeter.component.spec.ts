import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeterComponent } from './submeter.component';

describe('SubmeterComponent', () => {
  let component: SubmeterComponent;
  let fixture: ComponentFixture<SubmeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
