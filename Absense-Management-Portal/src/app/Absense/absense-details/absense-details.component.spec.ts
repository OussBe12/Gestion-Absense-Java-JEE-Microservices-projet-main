import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenseDetailsComponent } from './absense-details.component';

describe('AbsenseDetailsComponent', () => {
  let component: AbsenseDetailsComponent;
  let fixture: ComponentFixture<AbsenseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsenseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
