import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMedicamentoComponent } from './eliminar-medicamento.component';

describe('EliminarMedicamentoComponent', () => {
  let component: EliminarMedicamentoComponent;
  let fixture: ComponentFixture<EliminarMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMedicamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
