import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'card-ajain26',
  templateUrl: './card-ajain26.component.html',
  styleUrls: ['./card-ajain26.component.css']
})
export class CardAjain26Component implements OnInit {

  selectajain26: Student;
  @Output() cardClick: EventEmitter<Student> = new EventEmitter();
  constructor() {
    this.selectajain26 = {
    ulid: 'ajain26',
    name: 'Apurva Jain',
    desc_short: 'Passionate Web-Developer',
    desc_long: 'I am 24 year web developer from India. I am passionate about web development and designing.Currently, I am pursuing Masters in Information Systems with a sequence as web application development.I have experience in working as web developer and database admin as well during my undergraduate studies.',
    major: 'Information Systems',
    platform: 'JAVA,Angular',
    hometown: 'Maheshwar, India',
    hobbies: 'Computer Games, travelling',
    inspiration: 'My Father',
    website: '#',
    school: 'Gurukul'
   };
  }

  ngOnInit() {
  }

  clickStudent(){
    this.cardClick.emit(this.selectajain26);
  }



}
