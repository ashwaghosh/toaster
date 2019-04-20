import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  headerHeight = 40; // this value is in pixel
  isHeaderSticky = true;
  footerHeight = 30;
  extraHeight: number;

  ngOnInit() {
    this.extraHeight = this.headerHeight + this.footerHeight;
  }

}
