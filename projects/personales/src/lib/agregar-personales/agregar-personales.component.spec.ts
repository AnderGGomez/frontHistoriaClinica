import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPersonalesComponent } from './agregar-personales.component';

describe('AgregarPersonalesComponent', () => {
  let component: AgregarPersonalesComponent;
  let fixture: ComponentFixture<AgregarPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
