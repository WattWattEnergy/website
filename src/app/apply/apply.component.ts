import { Component, OnInit, Injectable, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AddtofireService } from '../shared/addtofire.service';
import { Projects } from '../shared/models/projects';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireObject, AngularFireList } from 'angularfire2/database';


export interface Project {
  // id?: string;
  city?: string;
  size?: string;
  interest?: string;
}

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  // project: Project;
  public project = {
    city: '',
    size: '',
    interest: ''
  }

  @Input() Project: Project [];
  ProjectsCollection: AngularFirestoreCollection<Projects>;
  // Projects: Observable<Projects[]>;

  
  // Projects: Projects[];
  constructor(public _fireservice: AddtofireService, private fb: FormBuilder) { 
    // this.Project = this._fireservice.collection('Projects').valueChanges();
  }

  ngOnInit() {
    this._fireservice.getProjects().subscribe(project => {
      // console.log("Showing Projects");
      // console.log(Projects);
      this.Project = this.Project;
    })
    // this.resetForm();
    // this.project = Project;
  }

  // resetForm(form?: NgForm) {
  //   if (form!=null)
  //     form.resetForm();
  //   this._fireservice.Projects ={
  //     city : '',
  //     size : '',
  //   }
  // }

  createDefaultProject() {
    console.log("Adding your project");
    this._fireservice.createDefaultProject();
  }

  // onSubmit(form: NgForm) {
  //   let data = form.value;
  //   this._fireservice.collection("Project").add({data
  //   })
  // .then(function(docRef) {
  //     console.log("Document written with ID: ", docRef.id);
  //     console.log(docRef);
  // })
  // .catch(function(error) {
  //     console.error("Error adding document: ", error);
  // });
  // }
  form: NgForm
  
  onSubmit(form: NgForm){
    // console.log(form);
    // if(this.project.city != '' && this.project.size != ''){
      this._fireservice.onSubmit(form);
    //   this.project.city = '';
    //   this.project.size = '';
    // }
  }
}
