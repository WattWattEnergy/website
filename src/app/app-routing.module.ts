import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from 'src/app/landing/landing.component';
import { AboutComponent } from 'src/app/about/about.component';
import { CrowdfundingComponent } from 'src/app/crowdfunding/crowdfunding.component';
import { DonationComponent } from 'src/app/donation/donation.component';
import { EducationComponent } from 'src/app/education/education.component';
import { TokenComponent } from './token/token.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';
import { TestpageComponent } from './testpage/testpage.component';
import { OnboardComponent } from './onboard/onboard.component';
import { ApplyComponent } from './apply/apply.component';
import { ProjectsComponent } from './projects/projects.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UploadComponent } from './upload/upload.component';
import { CurateComponent } from './curate/curate.component';
import { DetailComponent } from './detail/detail.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';

const routes: Routes =
[{ path: '', redirectTo: 'landing', pathMatch: 'full' },
{ path: '', component: LandingComponent },
{ path: 'about', component: AboutComponent },
{ path: 'donation', component: DonationComponent },
{ path: 'crowdfunding', component: CrowdfundingComponent },
{ path: 'education', component: EducationComponent },
{ path: 'token', component: TokenComponent },
{ path: 'whitepaper', component: WhitepaperComponent },
{ path: 'testpage', component: TestpageComponent },
{ path: 'onboard', component: OnboardComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'upload', component: UploadComponent },
{ path: 'uploadtask', component: UploadTaskComponent },
{ path: 'loadingspinner', component: LoadingSpinnerComponent },
{ path: 'curate', component: CurateComponent },
{ path: 'detail', component: DetailComponent },
{ path: 'apply', component: ApplyComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
