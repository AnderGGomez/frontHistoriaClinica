import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarNacimientoComponent } from './consultar-nacimiento.component';

describe('ConsultarNacimientoComponent', () => {
  let component: ConsultarNacimientoComponent;
  let fixture: ComponentFixture<ConsultarNacimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarNacimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarNacimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
