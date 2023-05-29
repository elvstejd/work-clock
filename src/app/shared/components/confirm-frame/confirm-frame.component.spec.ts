import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFrameComponent } from './confirm-frame.component';

describe('ConfirmFrameComponent', () => {
  let component: ConfirmFrameComponent;
  let fixture: ComponentFixture<ConfirmFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmFrameComponent]
    });
    fixture = TestBed.createComponent(ConfirmFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
