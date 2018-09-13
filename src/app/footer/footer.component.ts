import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.css'],
  // templateUrl: './footer.component.html'
  template: `
  <footer>
  <div class="container">
      <p class="float-right"><a href="#">Back to top</a></p>
      <p>Created by Kevin Schaefer for IT354.</p>
      <p>&copy; 2018 Illinois State University</p>
  </div>
  </footer>
  `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
