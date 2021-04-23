import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubfollowersprofileComponent } from './githubfollowersprofile.component';

describe('GithubfollowersprofileComponent', () => {
  let component: GithubfollowersprofileComponent;
  let fixture: ComponentFixture<GithubfollowersprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubfollowersprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubfollowersprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
