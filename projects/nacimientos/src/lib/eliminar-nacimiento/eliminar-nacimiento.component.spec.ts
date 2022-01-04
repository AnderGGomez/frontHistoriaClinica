import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarNacimientoComponent } from './eliminar-nacimiento.component';

describe('EliminarNacimientoComponent', () => {
  let component: EliminarNacimientoComponent;
  let fixture: ComponentFixture<EliminarNacimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarNacimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarNacimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
