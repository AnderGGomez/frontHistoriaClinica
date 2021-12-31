import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHistoriaComponent } from './agregar-historia.component';

describe('AgregarHistoriaComponent', () => {
  let component: AgregarHistoriaComponent;
  let fixture: ComponentFixture<AgregarHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
