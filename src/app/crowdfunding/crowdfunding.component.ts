import { Component, HostListener, OnInit, InjectionToken, Injectable, Input, Inject } from '@angular/core';
import Web3 from 'web3';
import { Web3Service } from '../web3.service';
import { WyreService } from '../wyre.service';
import { DOCUMENT } from '@angular/common'; 

export const WEB3 = new InjectionToken<Web3>('web3', {
  providedIn: 'root',
  factory: () => {
    try {
      const provider = ('ethereum' in window) ? window['ethereum'] : Web3.givenProvider;
      return new Web3(provider);
    } catch (err) {
      throw new Error('Non-Ethereum browser detected. You should consider trying Mist or MetaMask!');
    }
  }
});


@Component({
  selector: 'app-crowdfunding',
  templateUrl: './crowdfunding.component.html',
  styleUrls: ['./crowdfunding.component.scss'],

})
export class CrowdfundingComponent implements OnInit {

  @Input('amount') amount:number;


  constructor(private _web3service: Web3Service, private _wyreservice: WyreService, @Inject(WEB3) private web3: Web3) {
// import data services like web3
// const web3 = new Web3("ws://localhost:8546");
   }
  //  Took this below out to remove zone.js error for callbacks
  ngOnInit() {}
  // async ngOnInit() {

  //   if ('enable' in this.web3.currentProvider) {
  //     await this.web3.currentProvider.enable();
  //   }
  //   const accounts = await this.web3.eth.getAccounts();
  //   console.log(accounts);
  //   // const web3 = new Web3("ws://localhost:8546");

  //   // var web3 = window.web3
  //   // ? new Web3(window.web3.currentProvider)
  //   // : new Web3(
  //   //     new Web3.providers.HttpProvider()
  //   //   );
  // }

  // sendwyre() {
  //   this._wyreservice.sendwyre();
  // }

  // Transfer1() {
  //   this._wyreservice.Transfer1();
  // }

  // Transfer2() {
  //   this._wyreservice.Transfer2();
  // }

  check1 () {
    this._web3service.check1();
  }

  check2 () {
    console.log('02');
  }

  check3 () {
    console.log('03');
  }

  async multi() {
    console.log("multi");
    const one = await this.check1();
    const two = await this.check2();
    const three = await this.check3();
  }

  Metamask() {
    this._web3service.Metamask();
  }

  run() {
    this._web3service.run();
  }

  Connect() {
    this._web3service.Connect();
  }

  PayE(amount) {
    this._web3service.PayE(amount);
  }

  // Transfer1() {
  //   this._wyreservice.Transfer1();
  // }

  Pay() {
    this._web3service.Pay();
  }

  PayT() {
    this._web3service.PayT();
  }

  public value;

  PayA(amount: number) {
    console.log("Sending Dai!");
    const Web3 = require('web3');
    const web3 = require('web3');
    console.log(web3);
    var DaiContract = "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359";
    var src = web3.eth.accounts[0];
    console.log(src);
    var dst = "0x76c67F724d155bf2725350bDF809460f5636bEc9";
    // var wad = 1000000000000000000;
    var am = document.getElementById("amount");
    console.log(am);
    var inputValue = (<HTMLInputElement>document.getElementById("amount"));
    console.log(inputValue);
    // var Amount =  document.getElementById('amount').value;
    var Amount =  inputValue.value;
    // var Amount = 10;
    var wad = web3.toWei(Amount, "ether");
    // var wad = Amount;
    var payContractABI = [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "bytes32" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [],
        name: "stop",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "guy", type: "address" },
          { name: "wad", type: "uint256" }
        ],
        name: "approve",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "owner_", type: "address" }],
        name: "setOwner",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "src", type: "address" },
          { name: "dst", type: "address" },
          { name: "wad", type: "uint256" }
        ],
        name: "transferFrom",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "guy", type: "address" },
          { name: "wad", type: "uint256" }
        ],
        name: "mint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "wad", type: "uint256" }],
        name: "burn",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "name_", type: "bytes32" }],
        name: "setName",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "src", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "stopped",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "authority_", type: "address" }],
        name: "setAuthority",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "bytes32" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "guy", type: "address" },
          { name: "wad", type: "uint256" }
        ],
        name: "burn",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "wad", type: "uint256" }],
        name: "mint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "dst", type: "address" },
          { name: "wad", type: "uint256" }
        ],
        name: "transfer",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "dst", type: "address" },
          { name: "wad", type: "uint256" }
        ],
        name: "push",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "src", type: "address" },
          { name: "dst", type: "address" },
          { name: "wad", type: "uint256" }
        ],
        name: "move",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [],
        name: "start",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "authority",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "guy", type: "address" }],
        name: "approve",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          { name: "src", type: "address" },
          { name: "guy", type: "address" }
        ],
        name: "allowance",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "src", type: "address" },
          { name: "wad", type: "uint256" }
        ],
        name: "pull",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [{ name: "symbol_", type: "bytes32" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "guy", type: "address" },
          { indexed: false, name: "wad", type: "uint256" }
        ],
        name: "Mint",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "guy", type: "address" },
          { indexed: false, name: "wad", type: "uint256" }
        ],
        name: "Burn",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: "authority", type: "address" }],
        name: "LogSetAuthority",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: "owner", type: "address" }],
        name: "LogSetOwner",
        type: "event"
      },
      {
        anonymous: true,
        inputs: [
          { indexed: true, name: "sig", type: "bytes4" },
          { indexed: true, name: "guy", type: "address" },
          { indexed: true, name: "foo", type: "bytes32" },
          { indexed: true, name: "bar", type: "bytes32" },
          { indexed: false, name: "wad", type: "uint256" },
          { indexed: false, name: "fax", type: "bytes" }
        ],
        name: "LogNote",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "src", type: "address" },
          { indexed: true, name: "guy", type: "address" },
          { indexed: false, name: "wad", type: "uint256" }
        ],
        name: "Approval",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "src", type: "address" },
          { indexed: true, name: "dst", type: "address" },
          { indexed: false, name: "wad", type: "uint256" }
        ],
        name: "Transfer",
        type: "event"
      }
    ];
  
    var PayContract = web3.eth.contract(payContractABI);
    var payContract = PayContract.at(DaiContract);
  
    payContract
      .transfer(dst, wad, { gas: 500000 }, console.log)
  
      var accountInterval = setInterval(function() {
        // Check if account has changed
        if (web3.eth.accounts[0] !== src) {
          src = web3.eth.accounts[0];
          // Call a function to update the UI with the new account
          // getDonationsByOwner(userAccount)
          //     .then(displayDonations);
        }
      }, 10000);
    }
  
    // PayT() {
    //   console.log("Sending Fake Ether!");
    //   // const Web3 = require('web3');
    //   var escrowContract = "0xc25a4f50dbb567d79adbc66344da5d72d6511cc3";
  
    //   var src = web3.eth.accounts[0];
    //   var payee = "0x76c67F724d155bf2725350bDF809460f5636bEc9";
  
    //   var Amount = 0.1;
    //   var B = web3.toWei(Amount, "ether");
      
    //   var payContractABI = [
    //     {
    //       constant: false,
    //       inputs: [
    //         {
    //           name: "recipient",
    //           type: "address"
    //         }
    //       ],
    //       name: "transferPrimary",
    //       outputs: [],
    //       payable: false,
    //       stateMutability: "nonpayable",
    //       type: "function"
    //     },
    //     {
    //       constant: false,
    //       inputs: [
    //         {
    //           name: "payee",
    //           type: "address"
    //         }
    //       ],
    //       name: "withdraw",
    //       outputs: [],
    //       payable: false,
    //       stateMutability: "nonpayable",
    //       type: "function"
    //     },
    //     {
    //       constant: true,
    //       inputs: [],
    //       name: "primary",
    //       outputs: [
    //         {
    //           name: "",
    //           type: "address"
    //         }
    //       ],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function"
    //     },
    //     {
    //       constant: true,
    //       inputs: [
    //         {
    //           name: "payee",
    //           type: "address"
    //         }
    //       ],
    //       name: "depositsOf",
    //       outputs: [
    //         {
    //           name: "",
    //           type: "uint256"
    //         }
    //       ],
    //       payable: false,
    //       stateMutability: "view",
    //       type: "function"
    //     },
    //     {
    //       constant: false,
    //       inputs: [
    //         {
    //           name: "payee",
    //           type: "address"
    //         }
    //       ],
    //       name: "deposit",
    //       outputs: [],
    //       payable: true,
    //       stateMutability: "payable",
    //       type: "function"
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         {
    //           indexed: true,
    //           name: "payee",
    //           type: "address"
    //         },
    //         {
    //           indexed: false,
    //           name: "weiAmount",
    //           type: "uint256"
    //         }
    //       ],
    //       name: "Deposited",
    //       type: "event"
    //     },
    //     {
    //       anonymous: false,
    //       inputs: [
    //         {
    //           indexed: true,
    //           name: "payee",
    //           type: "address"
    //         },
    //         {
    //           indexed: false,
    //           name: "weiAmount",
    //           type: "uint256"
    //         }
    //       ],
    //       name: "Withdrawn",
    //       type: "event"
    //     }
    //   ];
    //   var PayContract = web3.eth.contract(payContractABI);
    //   var payContract = PayContract.at(escrowContract);
    //   console.log(payContract);
    //   payContract.deposit(payee, { gas: 2000000, value: B }, console.log);
  
    //   var accountInterval = setInterval(function() {
    //     // Check if account has changed
    //     if (web3.eth.accounts[0] !== src) {
    //       src = web3.eth.accounts[0];
    //     }
    //   }, 10000);
    // }
  


    // run() {
  //   console.log('run2');
  // }
  //THIS WORKED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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

