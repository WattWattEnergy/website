import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private basePath = '/images';
  file: File;
  url = '';

  @Output() dropped =  new EventEmitter<FileList>();


  constructor(private afStorage: AngularFireStorage) { }

  handleFiles(event) {
    this.file = event.target.files[0];
  }

  //method to upload file at firebase storage
  async uploadFile(file) {
    if (this.file) {
      const filePath = `projects/${Date.now()}_Solar.jpeg`;    //path at which image will be stored in the firebase storage
      const snap = await this.afStorage.upload(filePath, this.file);    //upload task
      this.getUrl(snap);
      console.log(snap);
    } else {alert('Please select an image'); }
  }

  //method to retrieve download url
  private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
    const url = await snap.ref.getDownloadURL();
    this.url = url;  //store the URL
    console.log(this.url);
  }
}
