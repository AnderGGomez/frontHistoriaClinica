import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNacimientoComponent } from './agregar-nacimiento.component';

describe('AgregarNacimientoComponent', () => {
  let component: AgregarNacimientoComponent;
  let fixture: ComponentFixture<AgregarNacimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarNacimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarNacimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
