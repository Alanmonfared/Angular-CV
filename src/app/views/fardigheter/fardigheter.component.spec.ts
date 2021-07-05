import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FardigheterComponent } from './fardigheter.component';

describe('FardigheterComponent', () => {
  let component: FardigheterComponent;
  let fixture: ComponentFixture<FardigheterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FardigheterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FardigheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
