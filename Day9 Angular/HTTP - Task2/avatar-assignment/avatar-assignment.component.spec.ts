import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarAssignmentComponent } from './avatar-assignment.component';

describe('AvatarAssignmentComponent', () => {
  let component: AvatarAssignmentComponent;
  let fixture: ComponentFixture<AvatarAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
