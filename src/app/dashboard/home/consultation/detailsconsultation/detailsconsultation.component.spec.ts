import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsconsultationComponent } from './detailsconsultation.component';

describe('DetailsconsultationComponent', () => {
  let component: DetailsconsultationComponent;
  let fixture: ComponentFixture<DetailsconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsconsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
