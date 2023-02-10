import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAbsenseComponent } from './new-absense.component';

describe('NewAbsenseComponent', () => {
  let component: NewAbsenseComponent;
  let fixture: ComponentFixture<NewAbsenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAbsenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAbsenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
