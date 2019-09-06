import { Component, OnInit, Input, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddtofireService } from '../shared/addtofire.service';
import { Projects } from '../shared/models/projects';
import { Actives } from '../shared/models/actives';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
import Web3 from 'web3';
import { Web3Service } from '../shared/web3.service';
import { WyreService } from '../shared/wyre.service';
import {MatDialogModule} from '@angular/material/dialog';

export class Active {
  // id?: string;
  city?: string;
  size?: string;
}

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  @Input() active: Active[];
  
  constructor(private _fireservice: AddtofireService, private _web3service: Web3Service, private _wyreservice: WyreService) { }
  
  ngOnInit() {
    this._fireservice.getActives().subscribe(Active => {
      this.active = Active;
    })
  }

}
