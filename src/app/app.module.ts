import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PanelModule, AutoCompleteModule, LayoutModule, TabsComponent, TabsModule } from "@eamode/eang";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { DonationComponent } from "./donation/donation.component";
import { CrowdfundingComponent } from "./crowdfunding/crowdfunding.component";
import { EducationComponent } from "./education/education.component";
import { AboutComponent } from "./about/about.component";
import { TokenComponent } from "./token/token.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { WhitepaperComponent } from './whitepaper/whitepaper.component';
import { TestpageComponent } from './testpage/testpage.component';
import { OnboardComponent } from './onboard/onboard.component';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
// import { OnboardComponent } from './onboard/onboard.component';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DonationComponent,
    CrowdfundingComponent,
    EducationComponent,
    AboutComponent,
    TokenComponent,
    WhitepaperComponent,
    TestpageComponent,
    OnboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    AutoCompleteModule,
    LayoutModule,
    PdfViewerModule,
    TabsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]

})
export class AppModule {}
