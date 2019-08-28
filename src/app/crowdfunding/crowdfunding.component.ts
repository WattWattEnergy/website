import { Component, HostListener, OnInit, InjectionToken, Injectable } from '@angular/core';
import Web3 from 'web3';
import { Web3Service } from '../shared/web3.service';
import { WyreService } from '../shared/wyre.service';




@Component({
  selector: 'app-crowdfunding',
  templateUrl: './crowdfunding.component.html',
  styleUrls: ['./crowdfunding.component.scss'],

})
export class CrowdfundingComponent implements OnInit {

  


  constructor(private _web3service: Web3Service, private _wyreservice: WyreService) {
// import data services like web3
// const web3 = new Web3("ws://localhost:8546");
   }

  ngOnInit() {
    // const web3 = new Web3("ws://localhost:8546");

    // var web3 = window.web3
    // ? new Web3(window.web3.currentProvider)
    // : new Web3(
    //     new Web3.providers.HttpProvider()
    //   );
  }

  // sendwyre() {
  //   this._wyreservice.sendwyre();
  // }

  // Transfer1() {
  //   this._wyreservice.Transfer1();
  // }

  // Transfer2() {
  //   this._wyreservice.Transfer2();
  // }

  run() {
    this._web3service.run();
  }

  Connect() {
    this._web3service.Connect();
  }

  PayE() {
    this._web3service.PayE();
  }

  Pay() {
    this._web3service.Pay();
  }

  PayT() {
    this._web3service.PayT();
  }
  
//   @HostListener('document:onclick', ['$event']) 
//     onclick(connectM) {
//       console.log('here');
//     }

//     async function Connect() {
//       // Modern dapp browsers...
//       if (window.ethereum) {
//           window.web3 = new Web3(ethereum);
//           try {
//               // Request account access if needed
//               await ethereum.enable();
//               // Acccounts now exposed
//               web3.eth.sendTransaction({/* ... */ });
//           } catch (error) {
//               // User denied account access...
//           }
//       }
//       // Legacy dapp browsers...
//       else if (window.web3) {
//           window.web3 = new Web3(web3.currentProvider);
//           // Acccounts always exposed
//           web3.eth.sendTransaction({/* ... */ });
//       }
//       // Non-dapp browsers...
//       else {
//           console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
//       }
//   };
  
  // window.addEventListener('load', function() {
  
  //   // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  //   if (typeof window.web3 !== 'undefined') {
  //     // Use Mist/MetaMask's provider
  //     window.web3 = new Web3(window.web3.currentProvider);
  //   } else {
  //     console.log('No web3? You should consider trying MetaMask!')
  //     // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  //     window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  //   }
  
  //   platformBrowserDynamic().bootstrapModule(AppModule);
  
  // });

}

