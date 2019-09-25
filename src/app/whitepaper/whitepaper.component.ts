import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whitepaper',
  template: `
    <div>
      <label></label>
    </div>
    <pdf-viewer
      [src]="pdfSrc"
      [render-text]="true"
      style="display: block;"
    ></pdf-viewer>
  //   <div style="height: 100%; width= 100%;">
  //   <object style="height: 100%; width= 100%;" data="../assets/images/whitepaper.pdf" type="application/pdf">
  //   <iframe style="height: 100%; width= 100%;" src="https://docs.google.com/viewer?url=../assets/images/whitepaper.pdf&embedded=true"></iframe>
  // </object>
  //   </div>
  `,
  styleUrls: ['./whitepaper.component.scss']
})
export class WhitepaperComponent implements OnInit {
  constructor() {}

  pdfSrc = '../assets/images/whitepaper.pdf';

  ngOnInit() {}
}
