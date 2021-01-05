import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronatableComponent } from './coronatable.component';

describe('CoronatableComponent', () => {
  let component: CoronatableComponent;
  let fixture: ComponentFixture<CoronatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
