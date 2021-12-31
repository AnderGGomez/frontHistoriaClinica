import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEnfermedadComponent } from './eliminar-enfermedad.component';

describe('EliminarEnfermedadComponent', () => {
  let component: EliminarEnfermedadComponent;
  let fixture: ComponentFixture<EliminarEnfermedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEnfermedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
