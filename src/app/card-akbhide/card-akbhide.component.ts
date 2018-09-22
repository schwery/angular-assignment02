import { CardAkbhideServices } from './card-akbhide.services';
import { Student } from './../student';
import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'card-akbhide',
  templateUrl: './card-akbhide.component.html',
  styleUrls: ['./card-akbhide.component.css']
})
export class CardAkbhideComponent implements OnInit {

  @Output() cardClick: EventEmitter<Student> =   new EventEmitter();
  
 private akbhide : Student;

  constructor(service?: CardAkbhideServices) {
    this.akbhide = service.getDetails();
  }

  getAkbhide(){
    return this.akbhide;
  }
  
  ngOnInit() {}

  clickCard(){
    this.cardClick.emit(this.akbhide);
  }

}