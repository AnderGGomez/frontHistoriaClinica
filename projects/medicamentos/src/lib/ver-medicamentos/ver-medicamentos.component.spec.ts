import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMedicamentosComponent } from './ver-medicamentos.component';

describe('VerMedicamentosComponent', () => {
  let component: VerMedicamentosComponent;
  let fixture: ComponentFixture<VerMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMedicamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
