import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { UploadComponent } from '../upload/upload.component';
import { DropzoneDirective } from '../shared/dropzone.directive';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

@Input() file: File;

// files: File[] = [];
 
// @Output() dropped = new EventEmitter<FileList>();
// @Output() hovered = new EventEmitter<boolean>();

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {

    // The storage path
    // const path = `projects/SanJuan.jpeg`;
    // const path = `projects/${Date.now()}_${this.file.name}`;
    const path = `projects/${Date.now()}_Solar.jpeg`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        console.log("async");
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db.collection('files').add( { downloadURL: this.downloadURL, path });
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
