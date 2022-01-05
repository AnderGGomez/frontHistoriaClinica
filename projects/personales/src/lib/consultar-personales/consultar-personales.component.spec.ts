import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPersonalesComponent } from './consultar-personales.component';

describe('ConsultarPersonalesComponent', () => {
  let component: ConsultarPersonalesComponent;
  let fixture: ComponentFixture<ConsultarPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
