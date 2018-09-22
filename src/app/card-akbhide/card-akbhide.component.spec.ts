import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAkbhideComponent } from './card-akbhide.component';

describe('CardAkbhideComponent', () => {
  let component: CardAkbhideComponent;
  let fixture: ComponentFixture<CardAkbhideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAkbhideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAkbhideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
