import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCirugiasComponent } from './agregar-cirugias.component';

describe('AgregarCirugiasComponent', () => {
  let component: AgregarCirugiasComponent;
  let fixture: ComponentFixture<AgregarCirugiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCirugiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCirugiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
