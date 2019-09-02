import { Component, OnInit, Injectable, HostListener, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AddtofireService } from '../shared/addtofire.service';
import { Projects } from '../shared/models/projects';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { ProjectsComponent } from 'src/app/projects/projects.component';
import { ApplyComponent } from 'src/app/apply/apply.component';
import { NotificationService } from '../shared/notification.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";


@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})

export class TestpageComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) private data: any;
  Projects: Projects[];
  // constructor(private http:HttpClient, private db: AngularFireDatabase) { }
  constructor(private _fireservice: AddtofireService, 
    private dialog: MatDialog, 
    private _notification: NotificationService,
    // private dialogRef: MatDialogRef<TestpageComponent>
  ) {}

  ngOnInit() { }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = false;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30em;";
    dialogConfig.position = {
      'top': '1em'
    };
    this.dialog.open(ApplyComponent, dialogConfig);
    
  }

  close() {
    const dialogConfig = new MatDialogConfig();
    // this.dialogRef.close();
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    // this.dialogRef.close();
  }

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
