import { Component, OnInit, Input, Injectable } from '@angular/core';
import { AddtofireService } from '../shared/addtofire.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireObject, AngularFireList } from 'angularfire2/database';
// import { Projects } from '../shared/models/projects';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
import Web3 from 'web3';
import { Web3Service } from '../shared/web3.service';
import { MatDialogModule } from '@angular/material/dialog';

export class Projects {
  id?: string;
  city?: string;
  size?: string;
  type?: string;
  img?: string;
}



@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  ProjectsCollection: AngularFirestoreCollection<Projects>;
  Projects: Observable<Projects[]>;
  ProjectsDoc: AngularFirestoreDocument<Projects>;

  // @Input() project: Project[];

  constructor(private db: AngularFirestore, private _fireservice: AddtofireService) { 
    this.Projects = this.db.collection('Projects').valueChanges();
  }

  choose(document) {
    console.log("Details Service Called");
    console.log(document);
    this.Projects = this.db.collection('Projects').valueChanges();
    // this._fireservice.getProjects().subscribe(Projects => {
    //   // console.log(Projects);
    //   this.project = Projects;
    // })
    return this.Projects;
  }
}

// getProjects() {
//   return this.Projects;
//   // console.log(this.Projects);
//   // var li = document.createElement('li', initials )
// }