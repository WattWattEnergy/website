import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'ww-form',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss'],
  // selector: 'ww-form',
  // template: `
  //   <h1>Signup Form</h1>
  //   <app-hero-main [hero]="hero"></app-hero-main>
  // `,
  // styles: ['h1 { font-weight: normal; }']
})

export class OnboardComponent implements OnInit {
  // name = new FormControl('')
  // form: FormGroup
  // email = 'email'
  // fieldValue = ''

  // constructor() { }



  ngOnInit() {
    // this.form = new FormGroup({
    //   [this.email]: new FormControl(this.fieldValue)
    // })
  }

}


// class onSubmit {
//   const email = this.form.value.email

//   this.httpClient
//     .post(this.apiURL, {
//       email: this.form.value.email
//     })
//     .subscribe((x: any) => {}, err => console.log(err))
// }