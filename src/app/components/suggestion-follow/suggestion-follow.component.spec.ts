import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionFollowComponent } from './suggestion-follow.component';

describe('SuggestionFollowComponent', () => {
  let component: SuggestionFollowComponent;
  let fixture: ComponentFixture<SuggestionFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
