import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'selected-student',
  templateUrl: './selected-student.component.html',
  styleUrls: ['./selected-student.component.css']
})
export class SelectedStudentComponent implements OnInit {
  @Input() selected: Student;

  constructor() {

    this.selected = {
      ulid: '',
      name: 'Illinois Stat4e Student',
      desc_short: 'Description of the students major, interests, etc.',
      desc_long: 'Description of the students major, interests, etc.',
      major: 'Applied Computer Science',
      platform: '',
      hometown: '',
      hobbies: '',
      inspiration: '',
      website: '',
      school: ''
    };


   }

  ngOnInit() {
  }

}
