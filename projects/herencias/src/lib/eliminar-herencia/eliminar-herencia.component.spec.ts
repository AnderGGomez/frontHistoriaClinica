import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHerenciaComponent } from './eliminar-herencia.component';

describe('EliminarHerenciaComponent', () => {
  let component: EliminarHerenciaComponent;
  let fixture: ComponentFixture<EliminarHerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarHerenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarHerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
