import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'card-bnbispi',
  templateUrl: './card-bnbispi.component.html',
  styleUrls: ['./card-bnbispi.component.css']
})
export class CardBnbispiComponent implements OnInit {

  @Output() cardClick: EventEmitter<Student> = new EventEmitter();

  me: Student;

  displayStudent() {
    this.cardClick.emit(this.me);
  }

  constructor() {
    this.me = {
      ulid: 'bnbispi',
      name: 'Braden Bisping',
      desc_short: 'I am a senior ISU Computer Science major with a strong interest in web application development.',
      desc_long: 'I am a senior here at Illinois State University, studying Computer Science in the School of ' +
        'Information Technology. I have a strong interest in web application development, specifically using the ' +
        'modern Angular framework. This past summer I acquired a proficient skill level using this framework while ' +
        'working at my internship with Pavlov Media in Champaign, IL. I am really looking forward to starting ' +
        'working for them full time at the start of 2019.',
      major: 'Computer Science',
      platform: 'Angular/TypeScript',
      hometown: 'Morton, IL',
      hobbies: 'listening to music, playing basketball, writing music',
      inspiration: 'Gary Vaynerchuk (entreprenuer)',
      website: 'http://bnbispi.it354.com/assignment1/',
      school: 'Illinois State University'
    };
  }

  ngOnInit() {
  }

}
