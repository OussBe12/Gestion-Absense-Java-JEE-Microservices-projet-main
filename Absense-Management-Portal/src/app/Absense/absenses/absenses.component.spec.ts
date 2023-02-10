import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsensesComponent } from './absenses.component';

describe('AbsensesComponent', () => {
  let component: AbsensesComponent;
  let fixture: ComponentFixture<AbsensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
