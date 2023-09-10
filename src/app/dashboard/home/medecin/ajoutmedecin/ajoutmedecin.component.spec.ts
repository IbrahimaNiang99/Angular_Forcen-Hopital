import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmedecinComponent } from './ajoutmedecin.component';

describe('AjoutmedecinComponent', () => {
  let component: AjoutmedecinComponent;
  let fixture: ComponentFixture<AjoutmedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutmedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
