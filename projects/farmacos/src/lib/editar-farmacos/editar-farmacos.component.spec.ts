import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFarmacosComponent } from './editar-farmacos.component';

describe('EditarFarmacosComponent', () => {
  let component: EditarFarmacosComponent;
  let fixture: ComponentFixture<EditarFarmacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFarmacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFarmacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
