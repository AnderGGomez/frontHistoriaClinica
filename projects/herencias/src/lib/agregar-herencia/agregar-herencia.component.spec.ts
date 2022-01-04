import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHerenciaComponent } from './agregar-herencia.component';

describe('AgregarHerenciaComponent', () => {
  let component: AgregarHerenciaComponent;
  let fixture: ComponentFixture<AgregarHerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarHerenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarHerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
