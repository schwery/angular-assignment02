import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'card-bschwer',
  templateUrl: './card-bschwer.component.html',
  styleUrls: ['./card-bschwer.component.css']
})
export class CardBschwerComponent implements OnInit {

  me: Student;

  @Output() cardClick:EventEmitter<Student> = new EventEmitter<Student>();

  constructor() {

    this.me = {
      ulid: 'bschwer',
      name: 'Brandon Schwery',
      desc_short: 'Senior majoring in Information Systems',
      desc_long: 'Senior web developer student and part-time web developer for the International Housewares Association.',
      major: 'Information Systems: Web Application Development',
      platform: 'Angular',
      hometown: 'Antioch, IL',
      hobbies: 'Golf, Videogames',
      inspiration: 'Brett Mackie',
      website: 'StackOverflow',
      school: 'Illinois State University'
    };

  }


  ngOnInit() {
  }

  sendClickedStudent(){
    this.cardClick.emit(this.me);
  }


}
