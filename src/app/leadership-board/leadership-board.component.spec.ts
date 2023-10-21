import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipBoardComponent } from './leadership-board.component';

describe('LeadershipBoardComponent', () => {
  let component: LeadershipBoardComponent;
  let fixture: ComponentFixture<LeadershipBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadershipBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
