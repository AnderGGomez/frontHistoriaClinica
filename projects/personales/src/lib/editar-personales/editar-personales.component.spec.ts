import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPersonalesComponent } from './editar-personales.component';

describe('EditarPersonalesComponent', () => {
  let component: EditarPersonalesComponent;
  let fixture: ComponentFixture<EditarPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
