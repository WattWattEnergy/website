import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
import { Projects } from './models/projects';



@Injectable({
  providedIn: 'root'
})

export class AddtofireService {
  ProjectsCollection: AngularFirestoreCollection<Projects>;
  Projects: Observable<Projects[]>;

  constructor(private db: AngularFirestore) { 
    this.Projects = this.db.collection('Projects').valueChanges();
  }

  getProjects() {
    return this.Projects;
    // console.log(this.Projects);
    // var li = document.createElement('li', initials )
  }

  createProject() {
    this.db.collection("Projects").add({
      city: "Mayaguez11",
      capital: "10000"
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
