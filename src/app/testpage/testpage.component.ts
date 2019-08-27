import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AddtofireService } from '../addtofire.service';
import { Projects } from '../models/projects';
// import * as functions from 'firebase-functions';
// import { AngularFirestore} from '../../node_modules/angularfire2/firestore';



@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})

export class TestpageComponent implements OnInit {

  renos = [{
    address: 'x',
    listingPrice: 'x',
    status: 'x',
    br: '3',
    bath: '2',
    rooms: '6',
    sqft: 'x',
    description: `Multi-family x, x, x x x.`,
    imageUrl: '../../assets/images/447-norman.png'
  },
  {
    address: 'x.',
    listingPrice: '$x',
    br: '3',
    status: 'x',
    bath: '2',
    rooms: '6',
    sqft: '1,518',
    description: `x x, x 3 x x x with x of the x x. `,
    imageUrl: 'x'
  },
  {
    address: 'x',
    listingPrice: 'x',
    br: '2',
    status: 'x',
    bath: '2',
    rooms: '4',
    sqft: 'x',
    description: `Completely x x x`,
    imageUrl: '../../assets/images/cobblestone-1.jpeg'
  }]
  // data: any;
  Projects: Projects[];
  // constructor() { }
  // constructor(private http:HttpClient, private db: AngularFireDatabase) { }
  // constructor(private db: AngularFirestore) {}
  constructor(private _fireservice: AddtofireService, private fb: FormBuilder) {}

  ngOnInit() {
    this._fireservice.getProjects().subscribe(Projects => {
      console.log(Projects);
      this.Projects = Projects;
    })
  }

  
  // ad: any;
  // adForm: FormGroup;

  // getProjects() {
  //   console.log("fetching!");
  //   this._fireservice.getProjects();
  // }

  createProject() {
    console.log("Adding your project");
    this._fireservice.createProject();
  }

  // startNewAdListing() {
  //   this.ad =     this.fireservice.createAd()
  //   this.buildForm()
  // }

  // saveAdChanges() {
  //   if (this.adForm.status != 'VALID') {
  //     console.log('form is not valid, cannot save to database')
  //     return
  //   }

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

  // add(City) {
  //   // var app = firebase.initializeApp({ ... });
  //   console.log("add")
  //   var postdata = {
  //     city: City
  //   }
  //   var ref = db.ref('projects');
  //   // firebase.database().ref('projects/').set({
  //   //   city: City
  //   // });
  //   // updates['projects/'] = postdata;
  //   ref.push(postdata);
  // }
  

  // onFileSelected(event) {
  //   console.log(event);
  //   this.selectedFile = <File>event.target.files[0];
  // }

  // helloWorld() {
  //   // response.send("Hello from Firebase!");
  //   this.http.request(firebaseConfig)
  //   .subscribe(res => {
  //     console.log(res);
  //   })
  // }


  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post('https://wattwatt-c4160.firebaseio.com/', fd)
  //     .subscribe(res => {
  //       console.log(res);
  //     })
  // }


  // boxup() {
  //   console.log("here5");
  // }

}
