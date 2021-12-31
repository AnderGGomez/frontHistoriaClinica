import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMedicamentoComponent } from './consultar-medicamento.component';

describe('ConsultarMedicamentoComponent', () => {
  let component: ConsultarMedicamentoComponent;
  let fixture: ComponentFixture<ConsultarMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarMedicamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
