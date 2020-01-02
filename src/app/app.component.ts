import { Component, ViewChild } from '@angular/core';
import { TestService } from './test.service';
import { Moment } from 'moment';
import * as moment from 'moment';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenavOverMode: 'side' | 'over' = 'side';
  isSmallScreen: boolean;

  @ViewChild(MatSidenav, {static: false}) private _sidenav: MatSidenav;

  constructor(
    private testService: TestService
  ) {
    this.testService.getList().subscribe(result =>{
      console.log(result);
    });
    //this.testService.testPost().subscribe(result =>{
    //  console.log(result);
    //});
    //this.testService.testDelete().subscribe(result =>{
    //  console.log(result);
    //});
  }

  toggleSidenav() {
    this._sidenav.toggle();
  }

}
