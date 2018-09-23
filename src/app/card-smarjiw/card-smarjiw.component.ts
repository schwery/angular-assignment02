import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'card-smarjiw',
  templateUrl: './card-smarjiw.component.html',
  //styleUrls: ['./card-smarjiw.component.css']
})
export class CardSmarjiwComponent implements OnInit {

  //create student obj, use @output decorator

   me:Student;

  // new instance of eventEmitter
    @Output() cardClick:EventEmitter<Student> = new EventEmitter<Student>();
   

  constructor() { 
    
    // set the values of student
    this.me = {
      ulid: 'smarjiw',
      name: 'Illinois State University',
      desc_short: 'Major in Information System sequence Web development',
      desc_long: 'Web Developer,Javascript,HTML,CSS,JSP,JAVA,Mainframe, COBOL,JCL,DB2 interested in Python,PHP,AngularJS',
      major: 'Information System',
      platform: 'Java',
      hometown: 'Pune India',
      hobbies: 'Playing with daughter',
      inspiration: 'Mother Teresa',
      website: 'https://www.w3schools.com/',
      school: 'SSCET'
    };
     
  }

  ngOnInit() {
  }

  // create a method, sendClickedStudent()

  sendClickedStudent(){
  
       this.cardClick.emit(this.me);
  }
  
}
