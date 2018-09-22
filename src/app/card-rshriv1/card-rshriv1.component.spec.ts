import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRshriv1Component } from './card-rshriv1.component';

describe('CardRshriv1Component', () => {
  let component: CardRshriv1Component;
  let fixture: ComponentFixture<CardRshriv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRshriv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRshriv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
