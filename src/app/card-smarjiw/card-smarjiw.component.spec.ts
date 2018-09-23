import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSmarjiwComponent } from './card-smarjiw.component';

describe('CardSmarjiwComponent', () => {
  let component: CardSmarjiwComponent;
  let fixture: ComponentFixture<CardSmarjiwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSmarjiwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSmarjiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
