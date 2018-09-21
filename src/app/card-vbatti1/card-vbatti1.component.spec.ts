import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVbatti1Component } from './card-vbatti1.component';

describe('CardVbatti1Component', () => {
  let component: CardVbatti1Component;
  let fixture: ComponentFixture<CardVbatti1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVbatti1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVbatti1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
