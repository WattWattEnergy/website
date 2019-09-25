import { Component, OnInit, Input, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddtofireService } from '../shared/addtofire.service';
import { Projects } from '../shared/models/projects';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
import Web3 from 'web3';
import { Web3Service } from '../shared/web3.service';
import { WyreService } from '../shared/wyre.service';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingSpinnerComponent } from '../ui/loading-spinner/loading-spinner.component';

export class Project {
  // id?: string;
  city?: string;
  size?: string;
  img?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  
  // project: Project[];
  @Input() project: Project[];

  showSpinner: boolean = true;

  
  constructor(private _fireservice: AddtofireService, private _web3service: Web3Service, private _wyreservice: WyreService) { }
  
  ngOnInit() {
    // this._fireservice.subscribe(() => this.showSpinner = false)
    this._fireservice.getProjects().subscribe(Projects => {
      // console.log(Projects);
      this.showSpinner = false;
      this.project = Projects;
    })
  }
  // project: Projects
  // Delete(project) {
  //   this._fireservice.Delete(this.project);
  // }

  // Pay() {
  //   console.log("Opening up SendWyre");
  //   this._wyreservice.sendwyre();
  // }

}
