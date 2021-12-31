import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMedicoComponent } from './eliminar-medico.component';

describe('EliminarMedicoComponent', () => {
  let component: EliminarMedicoComponent;
  let fixture: ComponentFixture<EliminarMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
