import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPersonalesComponent } from './eliminar-personales.component';

describe('EliminarPersonalesComponent', () => {
  let component: EliminarPersonalesComponent;
  let fixture: ComponentFixture<EliminarPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
