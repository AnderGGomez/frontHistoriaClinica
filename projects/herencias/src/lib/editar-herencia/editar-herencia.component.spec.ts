import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHerenciaComponent } from './editar-herencia.component';

describe('EditarHerenciaComponent', () => {
  let component: EditarHerenciaComponent;
  let fixture: ComponentFixture<EditarHerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHerenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
