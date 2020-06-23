import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorDesign1Component } from './collector-design1.component';

describe('CollectorDesign1Component', () => {
  let component: CollectorDesign1Component;
  let fixture: ComponentFixture<CollectorDesign1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorDesign1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorDesign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
