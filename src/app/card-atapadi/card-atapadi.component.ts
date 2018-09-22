import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'card-atapadi',
  templateUrl: './card-atapadi.component.html',
  styleUrls: ['./card-atapadi.component.css']
})
export class CardAtapadiComponent implements OnInit {

  @Input() me: Student;

  @Output() cardClick: EventEmitter<Student> = new EventEmitter();

  sendClickedStudent() {

    this.cardClick.emit({
      ulid: 'atapadi',
      name: 'Akanksha Tapadia',
      desc_short: 'I am a passionate IT graduate student with an emphasis in web application development.',
      desc_long: 'I am a passionate IT graduate student with an emphasis in web application development. I am highly interested in logical and analytical problem-solving activities. In future I wish to be a successfull Database Administrator',
      major: 'Internet Application Development',
      platform: 'Java, Bootstrap, Javascript, PL/SQL',
      hometown: 'Indore',
      hobbies: 'Reading and Cooking',
      inspiration: 'My Dad',
      website: 'https://www.pluralsight.com/',
      school: 'St. Joseph Sr Sec School'
    });
  }
  ngOnInit() {
  }

}
