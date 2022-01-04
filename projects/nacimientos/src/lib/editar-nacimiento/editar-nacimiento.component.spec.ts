import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNacimientoComponent } from './editar-nacimiento.component';

describe('EditarNacimientoComponent', () => {
  let component: EditarNacimientoComponent;
  let fixture: ComponentFixture<EditarNacimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarNacimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNacimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
