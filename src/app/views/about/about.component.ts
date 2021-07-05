import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  setClasses() {
    return {
      green: this.clicked,
      red: !this.clicked
    }
  }

 }



