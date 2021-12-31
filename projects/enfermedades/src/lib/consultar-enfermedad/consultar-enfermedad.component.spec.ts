import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEnfermedadComponent } from './consultar-enfermedad.component';

describe('ConsultarEnfermedadComponent', () => {
  let component: ConsultarEnfermedadComponent;
  let fixture: ComponentFixture<ConsultarEnfermedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarEnfermedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
