import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarHistoriaComponent } from './consultar-historia.component';

describe('ConsultarHistoriaComponent', () => {
  let component: ConsultarHistoriaComponent;
  let fixture: ComponentFixture<ConsultarHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
