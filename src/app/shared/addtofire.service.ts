import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
// import { Projects } from './models/projects';
import { NgForm } from '@angular/forms';

export class Projects {
  id?: string;
  city?: string;
  size?: string;
  type?: string;
}

export class Active {
  id?: string;
  city?: string;
  size?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})

export class AddtofireService {
  ProjectsCollection: AngularFirestoreCollection<Projects>;
  Projects: Observable<Projects[]>;
  Active: Observable<Active[]>;
  form: NgForm;
  ProjectsDoc: AngularFirestoreDocument<Projects>;

  // public projects = {
  //   city: '',
  //   size: ''
  // }
  
  // formData: Employee;

  constructor(private db: AngularFirestore) { 
    this.Projects = this.db.collection('Projects').valueChanges();
    this.Active = this.db.collection('Active').valueChanges();
  }

  getProjects() {
    return this.Projects;
    // console.log(this.Projects);
    // var li = document.createElement('li', initials )
  }

  getActives() {
    return this.Active;
  }

  onSubmit(form) {
    let project = form.value;
    console.log("Submitting your new project");
    console.log(project);
    this.db.collection("Projects").add({
      project,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      console.log(docRef);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }  

  
  Delete(project: Projects) {
    // let project = form.value;
    console.log("Deleting a project");
    console.log(project);
    this.ProjectsDoc = this.db.doc('Projects/projects');
    console.log(this.ProjectsDoc);
    this.ProjectsDoc.delete();
    // this.db.collection("Projects").delete({
    //   project,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })
  // .then(function(docRef) {
  //     console.log("Document written with ID: ", docRef.id);
  //     console.log(docRef);
  // })
  // .catch(function(error) {
  //     console.error("Error adding document: ", error);
  // });
  }  

  createDefaultProject() {
    this.db.collection("Projects").add({
      city: "Mayaguez11",
      size: "10 MW",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      console.log(docRef);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }

    // createAd(): AngularFireObject<AdListing> {
  //   console.log('creating ad!');
  //   const adDefault = new AdListing()
  //   const adKey = this.db.collection('/Projects').push(adDefault).key
  //   return this.db.object('/ads/' + adKey)
  // }

  // updateAd(ad: AngularFireObject<AdListing>, data: any) {
  //   return ad.update(data)
  // }
}
