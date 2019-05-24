import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdfundingComponent } from './crowdfunding.component';

describe('CrowdfundingComponent', () => {
  let component: CrowdfundingComponent;
  let fixture: ComponentFixture<CrowdfundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdfundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdfundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
