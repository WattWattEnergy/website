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
import { DetailComponent } from 'src/app/detail/detail.component';
import { DetailsService } from '../shared/details.service';


export class Project {
  // id?: string;
  city?: string;
  size?: string;
  img?: string;
}

@Component({
  selector: 'app-curate',
  templateUrl: './curate.component.html',
  styleUrls: ['./curate.component.scss']
})
export class CurateComponent implements OnInit {

  @Input() project: Project[];

  constructor(private _fireservice: AddtofireService, private _web3service: Web3Service, 
    private _wyreservice: WyreService, private _detailsservice: DetailsService) { }

  ngOnInit() {
    this._fireservice.getProjects().subscribe(Projects => {
      // console.log(Projects);
      this.project = Projects;
    })
  }

  choose(document) {
    console.log("Getting Details");
    console.log(document);
    // document = 
    this._detailsservice.choose(document)
  }

}
