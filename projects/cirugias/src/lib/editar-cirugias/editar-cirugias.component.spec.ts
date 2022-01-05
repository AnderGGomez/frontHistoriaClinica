import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCirugiasComponent } from './editar-cirugias.component';

describe('EditarCirugiasComponent', () => {
  let component: EditarCirugiasComponent;
  let fixture: ComponentFixture<EditarCirugiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCirugiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCirugiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
