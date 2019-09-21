import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
// import { Item } from './item';

@Injectable()
export class ItemService {

  constructor(
    private af: AngularFirestore,
    private db: AngularFireDatabase
  ) { }

  // item: AngularFireObject<Item>

  getItemsList() {
    return this.db.list('/items').valueChanges();
  }
}