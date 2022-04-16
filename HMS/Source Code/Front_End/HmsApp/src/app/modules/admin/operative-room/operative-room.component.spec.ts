import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativeRoomComponent } from './operative-room.component';

describe('OperativeRoomComponent', () => {
  let component: OperativeRoomComponent;
  let fixture: ComponentFixture<OperativeRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperativeRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativeRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
