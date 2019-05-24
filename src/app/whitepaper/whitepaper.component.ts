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
  `,
  styleUrls: ['./whitepaper.component.scss']
})
export class WhitepaperComponent implements OnInit {
  constructor() {}

  pdfSrc = '../assets/images/whitepaper.pdf';

  ngOnInit() {}
}
