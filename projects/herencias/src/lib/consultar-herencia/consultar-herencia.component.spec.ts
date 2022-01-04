import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarHerenciaComponent } from './consultar-herencia.component';

describe('ConsultarHerenciaComponent', () => {
  let component: ConsultarHerenciaComponent;
  let fixture: ComponentFixture<ConsultarHerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarHerenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarHerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
