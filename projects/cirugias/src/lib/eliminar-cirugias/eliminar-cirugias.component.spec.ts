import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCirugiasComponent } from './eliminar-cirugias.component';

describe('EliminarCirugiasComponent', () => {
  let component: EliminarCirugiasComponent;
  let fixture: ComponentFixture<EliminarCirugiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCirugiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCirugiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
