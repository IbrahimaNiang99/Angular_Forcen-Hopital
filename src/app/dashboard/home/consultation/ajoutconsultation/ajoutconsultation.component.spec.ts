import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutconsultationComponent } from './ajoutconsultation.component';

describe('AjoutconsultationComponent', () => {
  let component: AjoutconsultationComponent;
  let fixture: ComponentFixture<AjoutconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutconsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
