import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = '';
  headerItems: string[] = ["Skills", "Resume", "Experience", "Contact"];
  technologies: string[] = [];
  constructor(private _commonSvc: CommonService) { }

  ngOnInit() {
    this.name = 'Shreekar Uday Pujari';
    this.getDetails();
  }

  getDetails() {
    this._commonSvc.getDetails("assets/details.json").then(res => {
      console.log(res);
    });
  }
}
