import { Component, OnInit } from '@angular/core';
// import { UploadTaskComponent } from '../upload-task/upload-task.component';
import { DropzoneDirective } from '../shared/dropzone.directive';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  isHovering: boolean;

  files: File[] = [];

  // constructor(private uploadtask: UploadTaskComponent) { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    console.log("Hovering");
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    console.log("onDrop");
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      console.log(files);
      this.files.push(files.item(i));
    }
  }

}
