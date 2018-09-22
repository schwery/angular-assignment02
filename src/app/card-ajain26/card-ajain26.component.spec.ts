import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAjain26Component } from './card-ajain26.component';

describe('CardAjain26Component', () => {
  let component: CardAjain26Component;
  let fixture: ComponentFixture<CardAjain26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAjain26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAjain26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
