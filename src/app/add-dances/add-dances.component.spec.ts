import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDancesComponent } from './add-dances.component';

describe('AddDancesComponent', () => {
  let component: AddDancesComponent;
  let fixture: ComponentFixture<AddDancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDancesComponent]
    });
    fixture = TestBed.createComponent(AddDancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
