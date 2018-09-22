import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'card-rshriv1',
  templateUrl: './card-rshriv1.component.html',
  styleUrls: ['./card-rshriv1.component.css']
})
export class CardRshriv1Component implements OnInit {

  selected: Student;
  @Output() cardClick: EventEmitter<Student> =   new EventEmitter();

  constructor() {

    this.selected = {
      ulid: 'rshriv1',
      name: 'Rishi Shrivastava',
      desc_short: 'A passion for technology and a desire to excel urges me to seek a challenging position with opportunities in programming or web design.',
      desc_long: 'I am a second-year Graduate Student at Illinois State University, majoring in Information System and my sequence is Web Application Development. I did my undergrad in Computer Science from Hitarini College of Engineering India.',
      major: 'Information System',
      platform: 'J2EE,Angular,Maven',
      hometown: 'Jabalpur,India',
      hobbies: 'Cricket and Cooking',
      inspiration: 'My Family',
      website: '#',
      school: 'Kendriya Vidyalaya G.C.F No.1 Jabalpur'
    };

  }

   ngOnInit() {
  }

  sendClickStudent(){
    this.cardClick.emit(this.selected);
  }

}
