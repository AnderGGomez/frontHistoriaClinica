import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarFarmacosComponent } from './eliminar-farmacos.component';

describe('EliminarFarmacosComponent', () => {
  let component: EliminarFarmacosComponent;
  let fixture: ComponentFixture<EliminarFarmacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarFarmacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarFarmacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
