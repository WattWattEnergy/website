import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // src="../path/to/web3.min.js"
  // src="../path/to/ethjs.min.js"

  // window.addEventListener('load', async () => {
  //   // Modern dapp browsers...
  //   if (window.ethereum) {
  //     window.web3 = new Web3(ethereum);
  //     try {
  //       // Request account access if needed
  //       await ethereum.enable();
  //       // Acccounts now exposed
  //       web3.eth.sendTransaction({/* ... */ });
  //     } catch (error) {
  //       // User denied account access...
  //     }
  //   }
  //   // Legacy dapp browsers...
  //   else if (window.web3) {
  //     window.web3 = new Web3(web3.currentProvider);
  //     // Acccounts always exposed
  //     web3.eth.sendTransaction({/* ... */ });
  //   }
  //   // Non-dapp browsers...
  //   else {
  //     console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  //   }
  // });


  // function startApp() {
  //   var donationContractAddress = "DONATION_ADDRESS";
  //   donationContract = new web3js.eth.Contract(donationContractABI, donationContractAddress);

  //   var accountInterval = setInterval(function () {
  //     // Check if account has changed
  //     if (web3.eth.accounts[0] !== userAccount) {
  //       userAccount = web3.eth.accounts[0];
  //       // Call a function to update the UI with the new account
  //       getDonationsByOwner(userAccount)
  //         .then(displayDonations);
  //     }
  //   }, 100);
  // }

  // function SendDonation() {
  //   // Tell user donation is on the way
  //   $("#txStatus").text("Sending your donation. Just a minute!");
  //   // Send the tx to our contract:
  //   return donationContract.methods.SendDonation()
  //     .send({ from: userAccount })
  //     .on("receipt", function (receipt) {
  //       $("#txStatus").text("Thank you for your donation! ");
  //     })
  //     .on("error", function (error) {
  //       // Do something to alert the user their transaction has failed
  //       $("#txStatus").text(error);
  //     });
  // }

  // var inWei = web3.toWei('10', 'ether')
  // function listenForClicks(miniToken) {
  //   var button = document.querySelector('button.transferFunds')
  //   button.addEventListener('click', function () {
  //     miniToken.transfer(toAddress, value, { from: addr })
  //       .then(function (txHash) {
  //         console.log('Transaction sent')
  //         console.dir(txHash)
  //         waitForTxToBeMined(txHash)
  //       })
  //       .catch(console.error)
  //   })
  // }

  // async function waitForTxToBeMined(txHash) {
  //   let txReceipt
  //   while (!txReceipt) {
  //     try {
  //       txReceipt = await eth.getTransactionReceipt(txHash)
  //     } catch (err) {
  //       return indicateFailure(err)
  //     }
  //   }
  //   indicateSuccess()
  // }

}
