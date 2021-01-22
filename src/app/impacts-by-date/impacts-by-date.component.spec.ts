import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactsByDateComponent } from './impacts-by-date.component';

describe('ImpactsByDateComponent', () => {
  let component: ImpactsByDateComponent;
  let fixture: ComponentFixture<ImpactsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
