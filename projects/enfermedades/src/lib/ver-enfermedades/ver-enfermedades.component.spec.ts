import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEnfermedadesComponent } from './ver-enfermedades.component';

describe('VerEnfermedadesComponent', () => {
  let component: VerEnfermedadesComponent;
  let fixture: ComponentFixture<VerEnfermedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEnfermedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEnfermedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
