import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadTaskComponent } from '../upload-task/upload-task.component';
import { DropzoneDirective } from '../shared/dropzone.directive';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  // // Main task 
  // task: AngularFireUploadTask;

  // // Progress monitoring
  // percentage: Observable<number>;

  // snapshot: Observable<any>;

  // // Download URL
  // downloadURL: Observable<string>;

  // // State for dropzone CSS toggling
  // isHovering: boolean;

  @Output() dropped =  new EventEmitter<FileList>();

  files: File[] = [];
  isHovering: boolean;

  constructor(
    // private uploadtask: UploadTaskComponent, 
    private storage: AngularFireStorage, 
    private db: AngularFirestore) { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    console.log("Hovering");
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    console.log("onDrop");
    // console.log(files);
    for (let i = 0; i < files.length; i++) {
      console.log("The files:", files);
      const path = `projects/${Date.now()}_Solar.jpeg`;
      // this.files.push(files.item(i));
      this.storage.upload(path, files.item(i));
    }
  }
  // const ref = this.storage.ref(path);
  // This was working. Commented out only to try 
  //the way the tutorial did it with onDrop and startUpload on the upload-task component.
  // startUpload(event: FileList) {
  //   // The File object
  //   const file = event.item(0)

  //   // Client-side validation example
  //   if (file.type.split('/')[0] !== 'image') { 
  //     console.error('unsupported file type :( ')
  //     return;
  //   }

  //   // The storage path
  //   const path = `projects/${Date.now()}_Ponce.jpeg`;
  //   console.log(path);

  //   // Totally optional metadata
  //   const customMetadata = { app: 'My AngularFire-powered PWA!' };
  //   console.log(customMetadata);
  //   // The main task
  //   this.task = this.storage.upload(path, file, { customMetadata })
  //   console.log(this.task);
  //   // Progress monitoring
  //   this.percentage = this.task.percentageChanges();
  //   this.snapshot   = this.task.snapshotChanges()
  //   console.log(this.percentage);
  //   console.log(this.snapshot);

  //   // Reference to storage bucket
  //   const ref = this.storage.ref(path);
    
  //   // The file's download URL
  //   // this.downloadURL = this.task.downloadURL(); 
  //   async() =>  {
  //     this.downloadURL = await ref.getDownloadURL().toPromise();

  //     this.db.collection('files').add( { downloadURL: this.downloadURL, path });
  //   }
  
  // }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

}
