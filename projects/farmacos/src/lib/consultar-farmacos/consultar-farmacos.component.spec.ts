import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFarmacosComponent } from './consultar-farmacos.component';

describe('ConsultarFarmacosComponent', () => {
  let component: ConsultarFarmacosComponent;
  let fixture: ComponentFixture<ConsultarFarmacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarFarmacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarFarmacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
