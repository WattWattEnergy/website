import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AddtofireService } from '../addtofire.service';
import { Projects } from '../models/projects';


@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})

export class TestpageComponent implements OnInit {

  Projects: Projects[];
  // constructor(private http:HttpClient, private db: AngularFireDatabase) { }
  constructor(private _fireservice: AddtofireService) {}

  ngOnInit() { }

  // getProjects() {
  //   console.log("fetching!");
  //   this._fireservice.getProjects();
  // }

  //   const data = this.adForm.value
  //   this.fireservice.updateAd(this.ad, data)
  // }

  // private buildForm() {
  //   this.adForm = this.fb.group({
  //     title:    ['', Validators.required ],
  //     content:  ['', Validators.required ],
  //     price:    ['', Validators.required ],
  //     image:    ['', Validators.required ]
  //   });
  //   this.ad.subscribe(ad => {
  //     this.adForm.patchValue(ad)
  //   })
  // }

  // go() {
  //   console.log("GO!");
  //   this.db.collection('items').add({date: new Date});
  // }

  selectedFile = File=null;

  // googleLogin() {
  //   console.log("Logging in!")
  //   const provider = new firebase.auth.GoogleAuthProvider();
    
  //   firebase.auth().signInWithPopup(provider)
        
  //           .then(result => {
  //               const user = result.user;        
  //           })  
  //         }

  // onFileSelected(event) {
  //   console.log(event);
  //   this.selectedFile = <File>event.target.files[0];
  // }

}
