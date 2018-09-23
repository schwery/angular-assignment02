import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKhemnanComponent } from './card-khemnan.component';

describe('CardKhemnanComponent', () => {
  let component: CardKhemnanComponent;
  let fixture: ComponentFixture<CardKhemnanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardKhemnanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardKhemnanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
