import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFarmacosComponent } from './agregar-farmacos.component';

describe('AgregarFarmacosComponent', () => {
  let component: AgregarFarmacosComponent;
  let fixture: ComponentFixture<AgregarFarmacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFarmacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarFarmacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
