import { Student } from './../student';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-khemnan',
  templateUrl: './card-khemnan.component.html',
  styleUrls: ['./card-khemnan.component.css']
})
export class CardKhemnanComponent{ 

    private details: Student;
    constructor() {
      this.details={
      ulid:'khemnan',
      name:'Kunal',
      desc_short:'I am a graduate student in the school of IT at Illinois State University',
      desc_long: 'I am a graduate student in the school of IT at Illinois State University. My track is web development and I enjoy hiking and online gaming in my spare time.',
      major: 'Information Technology',
      platform: 'JavaScript',
      hometown: 'Indore, India',
      hobbies:'Hiking, Gaming',
      inspiration: 'Steve Jobs',
      website: 'http://khemnan.it354.com/assignment1/',
      school: 'Illinois State University'
  } }
  getKhemnan(){
    return this.details;
  }
 
  @Output() cardClick: EventEmitter<Student> =   new EventEmitter();
    
    clickedStudent(){
    this.cardClick.emit(this.details);
  }
}

