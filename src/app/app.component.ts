import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-cv';
  name = 'Sean Blessing';
  contactEmail = 'sean@blessingtechnology.com';
  contactPhone = '513-600-7096';
  displayWork = false;
  displayEdu = true;
  beers: string[] = ['Yuengling', 'Bud Light', 'Moerlein', 'Breckenridge IPA', 'Barqs'];
  
  ngOnInit(): void {
    console.log('init called!');
  }
  log() {
    console.log('button was pressed!');
  }
}
