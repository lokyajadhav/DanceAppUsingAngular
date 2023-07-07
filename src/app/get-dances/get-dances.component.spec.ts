import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDancesComponent } from './get-dances.component';

describe('GetDancesComponent', () => {
  let component: GetDancesComponent;
  let fixture: ComponentFixture<GetDancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDancesComponent]
    });
    fixture = TestBed.createComponent(GetDancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
