import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtbildningarComponent } from './utbildningar.component';

describe('UtbildningarComponent', () => {
  let component: UtbildningarComponent;
  let fixture: ComponentFixture<UtbildningarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtbildningarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtbildningarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
