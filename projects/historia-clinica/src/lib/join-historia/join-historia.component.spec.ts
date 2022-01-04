import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinHistoriaComponent } from './join-historia.component';

describe('JoinHistoriaComponent', () => {
  let component: JoinHistoriaComponent;
  let fixture: ComponentFixture<JoinHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
