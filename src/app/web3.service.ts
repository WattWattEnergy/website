import { Injectable, InjectionToken } from '@angular/core';
import Web3 from 'web3';
import { HttpClient } from '@angular/common/http';
import Big from 'big.js';
declare let Web3: any;
declare let web3;
declare let require: any;
declare let window: any;
// let tokenABI = require('./escrowContract.json');

// import * as Web3 from 'web3';
// export const WEB3 = new InjectionToken<Web3>('web3');
// const Web3 = require("web3");
// import { tsGen } from "ts-generator";
// import { Typechain } from "typechain";
// import { Eth } from 'web3x-es/eth';
// const eth = Eth.fromCurrentProvider();

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

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  constructor() { }

  check1 () {
    console.log('check1');
  }

  Metamask() {
    console.log('Connecting Metamask');
    web3 = new Web3();
    console.log(web3);
    web3.setProvider(new web3.providers.HttpProvider());
    console.log(web3.setProvider);
    web3.eth.getAccounts();
    // .then(function(accounts) {
    // console.log(accounts);
    // });
  };

  run() {
    console.log('Web3 Service Works!');
  }

  accounts(accounts) {
    console.log(accounts);
  }

  async Connect() {
    console.log('Connecting Metamask');
    web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider());
    web3.eth.getAccounts();

    const account = await this.accounts(this.accounts);
  }


  PayE(amount) {
    let that = this;
    console.log("Sending Ether!");
    const Web3 = require('web3');
    var escrowContract = "0x2ac4a0788FfCc9fb1E50F8BF81535974D8A1b710";
    console.log(escrowContract);
    // web3 = window.web3
    //   ? new Web3(window.web3.currentProvider)
    //   : new Web3(
    //       new Web3.providers.HttpProvider()
    //    );

    var src = web3.eth.accounts[0];
    console.log(src);
    var payee = "0x76c67F724d155bf2725350bDF809460f5636bEc9";
    console.log(payee);
    var Amount = 0.1;
    //     var Amount =  document.getElementById('amount').value;
    // var wad =  web3.toWei(Amount, "ether");
    // console.log(Amount);
    var B = web3.toWei(Amount, "ether");
    // var B = 1;
    console.log(B);
    
    let payContractABI = [
    {
      constant: false,
      inputs: [
        {
          name: "recipient",
          type: "address"
        }
      ],
      name: "transferPrimary",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "payee",
          type: "address"
        }
      ],
      name: "withdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "primary",
      outputs: [
        {
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        {
          name: "payee",
          type: "address"
        }
      ],
      name: "depositsOf",
      outputs: [
        {
          name: "",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          name: "payee",
          type: "address"
        }
      ],
      name: "deposit",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "payee",
          type: "address"
        },
        {
          indexed: false,
          name: "weiAmount",
          type: "uint256"
        }
      ],
      name: "Deposited",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "payee",
          type: "address"
        },
        {
          indexed: false,
          name: "weiAmount",
          type: "uint256"
        }
      ],
      name: "Withdrawn",
      type: "event"
    }
  ];
  
  var PayContract = web3.eth.contract(payContractABI);
  console.log(PayContract);
  var payContract = PayContract.at(escrowContract);
  console.log(payContract);
  payContract.deposit(payee, { gas: 200000, value: B }, console.log);
  // instance.transferFund(
  //   _transferTo,
  //   {
  //   from:_transferFrom,
  //   value:web3.toWei(_amount, “ether”)
  //   });
    
  var accountInterval = setInterval(function() {
    // Check if account has changed
    if (web3.eth.accounts[0] !== src) {
      src = web3.eth.accounts[0];
    }
  }, 10000);

  // async function waitForTxToBeMined(txHash) {
  //   let txReceipt;
  //   while (!txReceipt) {
  //     try {
  //       txReceipt = await eth.getTransactionReceipt(txHash);
  //     } catch (err) {
  //       return indicateFailure(err);
  //     }
  //   }
  // }
}

Pay() {
  console.log("Sending Dai!");
  const Web3 = require('web3');

  var DaiContract = "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359";
  var src = web3.eth.accounts[0];
  var dst = "0x76c67F724d155bf2725350bDF809460f5636bEc9";
  // var wad = 1000000000000000000;
  // var Amount =  document.getElementById('amount').value;
  var Amount = 10;
  var wad = web3.toWei(Amount, "ether");
  // var wad = Amount;
  console.log(Amount);
  console.log(wad);
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
  console.log(PayContract);
  var payContract = PayContract.at(DaiContract);
  console.log(payContract);

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

  PayT() {
    console.log("Sending Fake Ether!");
    // const Web3 = require('web3');
    var escrowContract = "0xc25a4f50dbb567d79adbc66344da5d72d6511cc3";

    var src = web3.eth.accounts[0];
    var payee = "0x76c67F724d155bf2725350bDF809460f5636bEc9";

    var Amount = 0.1;
    var B = web3.toWei(Amount, "ether");
    
    var payContractABI = [
      {
        constant: false,
        inputs: [
          {
            name: "recipient",
            type: "address"
          }
        ],
        name: "transferPrimary",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            name: "payee",
            type: "address"
          }
        ],
        name: "withdraw",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "primary",
        outputs: [
          {
            name: "",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          {
            name: "payee",
            type: "address"
          }
        ],
        name: "depositsOf",
        outputs: [
          {
            name: "",
            type: "uint256"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            name: "payee",
            type: "address"
          }
        ],
        name: "deposit",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "payee",
            type: "address"
          },
          {
            indexed: false,
            name: "weiAmount",
            type: "uint256"
          }
        ],
        name: "Deposited",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "payee",
            type: "address"
          },
          {
            indexed: false,
            name: "weiAmount",
            type: "uint256"
          }
        ],
        name: "Withdrawn",
        type: "event"
      }
    ];
    var PayContract = web3.eth.contract(payContractABI);
    var payContract = PayContract.at(escrowContract);
    console.log(payContract);
    payContract.deposit(payee, { gas: 2000000, value: B }, console.log);

    var accountInterval = setInterval(function() {
      // Check if account has changed
      if (web3.eth.accounts[0] !== src) {
        src = web3.eth.accounts[0];
      }
    }, 10000);
  }
}