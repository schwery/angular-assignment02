import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAtapadiComponent } from './card-atapadi.component';

describe('CardAtapadiComponent', () => {
  let component: CardAtapadiComponent;
  let fixture: ComponentFixture<CardAtapadiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAtapadiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAtapadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
