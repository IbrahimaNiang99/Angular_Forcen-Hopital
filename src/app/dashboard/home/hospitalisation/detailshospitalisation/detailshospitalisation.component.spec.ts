import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailshospitalisationComponent } from './detailshospitalisation.component';

describe('DetailshospitalisationComponent', () => {
  let component: DetailshospitalisationComponent;
  let fixture: ComponentFixture<DetailshospitalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailshospitalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailshospitalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
