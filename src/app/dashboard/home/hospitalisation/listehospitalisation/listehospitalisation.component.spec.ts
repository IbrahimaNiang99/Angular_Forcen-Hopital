import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListehospitalisationComponent } from './listehospitalisation.component';

describe('ListehospitalisationComponent', () => {
  let component: ListehospitalisationComponent;
  let fixture: ComponentFixture<ListehospitalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListehospitalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListehospitalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
