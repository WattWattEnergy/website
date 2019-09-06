import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PanelModule, AutoCompleteModule, LayoutModule } from "@eamode/eang";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { DonationComponent } from "./donation/donation.component";
import { CrowdfundingComponent } from "./crowdfunding/crowdfunding.component";
import { EducationComponent } from "./education/education.component";
import { AboutComponent } from "./about/about.component";
import { TokenComponent } from "./token/token.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { WhitepaperComponent } from './whitepaper/whitepaper.component';
import { TestpageComponent } from './testpage/testpage.component';
import { OnboardComponent } from './onboard/onboard.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Web3Service } from './shared/web3.service';
import { WyreService } from './shared/wyre.service';
import { NotificationService } from './shared/notification.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { ReactiveFormsModule } from "@angular/forms";
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AddtofireService } from "src/app/shared/addtofire.service";
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
import { ApplyComponent } from './apply/apply.component';
import * as firebase from 'firebase/app';
import 'hammerjs';
import { MaterialModule } from "./material/material.module";
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material';
// import 'firebase/<PACKAGE>';
// import firestore from 'firebase/firestore'
// import firebase from 'firebase/app';
// import 'firebase/app';
import { firestore } from 'firebase/app';
import { auth } from 'firebase/app';
import { UploadComponent } from './upload/upload.component';
import { UploaderService } from "src/app/shared/uploader.service";
import { DropzoneDirective } from './shared/dropzone.directive';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { AngularFireStorageModule } from "@angular/fire/storage";
import { UploaderComponent } from './uploader/uploader.component';
import { ActiveComponent } from './active/active.component';
// import { OnboardComponent } from './onboard/onboard.component';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// var firebaseConfig = {
//   apiKey: "AIzaSyACSlzr4Kcfrx4YZ1CxeMWLN7ocHZ-f1m0",
//   authDomain: "wattwatt-c4160.firebaseapp.com",
//   databaseURL: "https://wattwatt-c4160.firebaseio.com",
//   projectId: "wattwatt-c4160",
//   storageBucket: "wattwatt-c4160.appspot.com",
//   messagingSenderId: "1045010908290",
//   appId: "1:1045010908290:web:3b8d3825a4cae080"
// };

// const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DonationComponent,
    CrowdfundingComponent,
    EducationComponent,
    AboutComponent,
    TokenComponent,
    WhitepaperComponent,
    TestpageComponent,
    OnboardComponent,
    ProjectsComponent,
    ApplyComponent,
    UploadComponent,
    DropzoneDirective,
    UploadTaskComponent,
    UploaderComponent,
    ActiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    AutoCompleteModule,
    LayoutModule,
    PdfViewerModule,
    BrowserModule,
    MatNativeDateModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSliderModule,
    MatCardModule,
    MaterialModule,
    // AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule
    // TabsModule
  ],
  providers: [Web3Service,
    {provide: LocationStrategy, useClass: HashLocationStrategy}, AngularFirestore, AddtofireService, WyreService, NotificationService, UploaderService, DatePipe, UploadTaskComponent, { provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent],
  entryComponents: [ApplyComponent, UploadTaskComponent]

})
export class AppModule {}
