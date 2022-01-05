import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCirugiasComponent } from './consultar-cirugias.component';

describe('ConsultarCirugiasComponent', () => {
  let component: ConsultarCirugiasComponent;
  let fixture: ComponentFixture<ConsultarCirugiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCirugiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCirugiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
