import { enableProdMode, InjectionToken } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Web3 from 'web3';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // export const WEB3 = new InjectionToken<Web3>('web3', {
  //   providedIn: 'root',
  //   factory: () => {
  //     try {
  //       const provider = ('ethereum' in window) ? window['ethereum'] : Web3.givenProvider;
  //       return new Web3(provider);
  //     } catch (err) {
  //       throw new Error('Non-Ethereum browser detected. You should consider trying Mist or MetaMask!');
  //     }
  //   }
  // });