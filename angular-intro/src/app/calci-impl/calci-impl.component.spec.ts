import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciImplComponent } from './calci-impl.component';

describe('CalciImplComponent', () => {
  let component: CalciImplComponent;
  let fixture: ComponentFixture<CalciImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalciImplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalciImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
