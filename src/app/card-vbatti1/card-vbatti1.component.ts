import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'card-vbatti1',
  templateUrl: './card-vbatti1.component.html',
  styleUrls: ['./card-vbatti1.component.css']
})
export class CardVbatti1Component implements OnInit {

  @Output() cardClick: EventEmitter<Student> = new EventEmitter();
  me: Student;


  displayCard(){
    this.cardClick.emit(this.me);
  }

  constructor() {
    this.me= {

      ulid: 'vbatti1',
      name: 'Vince Battista',
      desc_short: 'I am a passionate IT undergraduate senior majoring in Computer Science.',
      desc_long: 'I am an IT senior majoring in Computer Science. I enjoy web development and java programming. I grew up in Bloomingdale, IL and lived there my entire life. I never did anything regarding computer science in high school, my first experience with anything CS was Java in IT 168.',
      major: 'Computer Science',
      platform: 'Java, Javascript',
      hometown: 'Bloomingdale, IL',
      hobbies: 'Watching movies, Playing video games, Listening to music',
      inspiration: 'Donald Glover',
      website: 'https://www.it354.com/vbatti1/assignment1',
      school: 'Illinois State University',
      };
   }

  ngOnInit() {
  }

}

