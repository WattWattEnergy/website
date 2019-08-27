import { Component, OnInit, Input } from '@angular/core';


export class Projects {
  id?: string;
  city?: string;
  size?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  @Input() project
  
  constructor() { }
  

  ngOnInit() {
  }

}
