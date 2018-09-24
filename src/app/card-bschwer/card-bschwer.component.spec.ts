import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBschwerComponent } from './card-bschwer.component';

describe('CardBschwerComponent', () => {
  let component: CardBschwerComponent;
  let fixture: ComponentFixture<CardBschwerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBschwerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBschwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});