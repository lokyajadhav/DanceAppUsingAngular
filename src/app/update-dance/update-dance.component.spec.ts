import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDanceComponent } from './update-dance.component';

describe('UpdateDanceComponent', () => {
  let component: UpdateDanceComponent;
  let fixture: ComponentFixture<UpdateDanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDanceComponent]
    });
    fixture = TestBed.createComponent(UpdateDanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
