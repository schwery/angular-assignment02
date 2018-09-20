import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'card-keschae',
  templateUrl: './card-keschae.component.html',
  styleUrls: ['./card-keschae.component.css']
})
export class CardKeschaeComponent implements OnInit {

  me: Student;

  constructor() {

  }


  ngOnInit() {
  }

}
