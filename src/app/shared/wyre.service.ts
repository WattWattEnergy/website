import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WyreService {

  // constructor(private Wyre: this.Wyre = "https://verify.sendwyre.com/js/widget-loader.js") { }
  constructor() { }
  // private Http: HttpClient

  // widget = new this.Wyre.Widget({
  //   env: "test",
  //   type: "onramp",
  //   accountId: "AC-EPLB2VQTJNH",
  //   auth: { type: "default" },
  //   operation: {
  //     type: "onramp",
  //     dest: "ethereum:0x98B031783d0efb1E65C4072C6576BaCa0736A912",
  //     sourceCurrency: "USD",
  //     destCurrency: "ETH",
  //     destAmount: 0.03
  //   }
  // });

  // sendwyre() {
  //   console.log('Wyre Service Works!');
  //   var widget = new Wyre.Widget({
  //     env: "test",
  //     accountId: "AC-EPLB2VQTJNH",
  //     auth: { type: "default" },
  //     operation: {
  //       type: "onramp",
  //       dest: "ethereum:0x98B031783d0efb1E65C4072C6576BaCa0736A912",
  //       sourceCurrency: "USD",
  //       destCurrency: "DAI",
  //       destAmount: 0.02
  //     },
  //     autoConfirm:true 
  //   });

  //   widget.open();

  //   var transfer = new Wyre.Widget({
  //     env: "test",
  //     accountId: "AC-EPLB2VQTJNH",
  //     auth: { type: "default" },
  //     operation: {
  //       type: "onramp",
  //       dest: "ethereum:0x98B031783d0efb1E65C4072C6576BaCa0736A912",
  //       sourceCurrency: "USD",
  //       destCurrency: "DAI",
  //       destAmount: 0.02
  //     },
  //     autoConfirm:true 
  //   });
  // }

//   // configure the widget for metamask authentication
//   widget = new Wyre.Widget({
//     env: "test",
//     type: "onramp",
//     accountId: "AC-EPLB2VQTJNH",
//     auth: { type: "default" },
//     operation: {
//       type: "onramp",
//       dest: "ethereum:0x98B031783d0efb1E65C4072C6576BaCa0736A912",
//       sourceCurrency: "USD",
//       destCurrency: "ETH",
//       destAmount: 0.03
//     }
//   });
//   // open the widget when the user presses the button
  // WyreW(e) {
  //   widget.open();
  // }

//   //add events here
//   widget.on("complete", function(event) {
//     console.log(event);
//   });

  // Transfer1() {
  //   console.log('Wyre Transfer');
  //   widget.open();

  //   var transfer1 = new Wyre.Widget({
  //     env: "test",
  //     accountId: "AC-EPLB2VQTJNH",
  //     auth: { type: "default" },
  //     operation: {
  //       type: "debitcard",
  //       dest: "ethereum:0x98B031783d0efb1E65C4072C6576BaCa0736A912",
  //       sourceCurrency: "USD",
  //       destCurrency: "DAI",
  //       destAmount: 0.02
  //     },
  //     autoConfirm:true 
  //   });
  // }


  // Transfer2() {
  //   widget.open();

  //   var transfer2 = new Wyre.Widget({
  //     env: "test",
  //     accountId: "AC-EPLB2VQTJNH",
  //     auth: { type: "secretKey",
  //     secretKey: "testertestertestertestertestertester" },
  //     operation: {
  //       type: "onramp",
  //       dest: "ethereum:0x98B031783d0efb1E65C4072C6576BaCa0736A912",
  //       sourceCurrency: "USD",
  //       destCurrency: "DAI",
  //       destAmount: 0.03
  //     }
  //   });
  // }

  // function  Transfer1() {
  //   console.log('Wyre Transfer');
  //   widget.open();

  //   var transfer1 = new Wyre.Widget({
  //     env: "test",
  //     accountId: "AC-EPLB2VQTJNH",
  //     auth: { type: "default" },
  //     operation: {
  //       type: "debitcard",
  //       dest: "ethereum:0x98B031783d0efb1E65C4072C6576BaCa0736A912",
  //       sourceCurrency: "USD",
  //       destCurrency: "DAI",
  //       destAmount: 0.02
  //     },
  //     autoConfirm:true 
  //   });
  // };


  // function Transfer2() {
  //   widget.open();

  //   var transfer2 = new Wyre.Widget({
  //     env: "test",
  //     accountId: "AC-EPLB2VQTJNH",
  //     auth: { type: "secretKey",
  //     secretKey: "testertestertestertestertestertester" },
  //     operation: {
  //       type: "onramp",
  //       dest: "ethereum:0x98B031783d0efb1E65C4072C6576BaCa0736A912",
  //       sourceCurrency: "USD",
  //       destCurrency: "DAI",
  //       destAmount: 0.03
  //     }
  //   });
  // };
}
