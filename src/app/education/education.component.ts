import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  edu: string = 'FJ Reitz HS (89) Indiana University (93)';
  constructor() { }

  ngOnInit() {
  }

}
