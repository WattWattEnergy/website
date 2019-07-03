import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MDCTabScroller} from '@material/tab-scroller';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //   function tokeneconomics() {
  //     document.getElementById( 'tokeneconomics' ).scrollIntoView();    
  // };
  
  // function smartcontracts() {
  //     document.getElementById( 'smartcontracts' ).scrollIntoView();
  //     window.setTimeout( function () { top(); }, 2000 );
  // };
  }

  // openCont(event, Content) {
  //   var i, tabcontent, tablinks;
  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  //   }
  //   document.getElementById(Content).style.display = "block";
  //   event.currentTarget.className += " active";
  // }

}