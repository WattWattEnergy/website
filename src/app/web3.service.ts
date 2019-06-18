import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
//   Connect() {


//     var web3 = new Web3();
//     web3.setProvider(new web3.providers.HttpProvider());
//     web3.eth.getAccounts().then(function(accounts) {
//       console.log(accounts);
//     });
// }
  constructor() { }

  run() {
    console.log('Web3 Service Works!');
  }
}
