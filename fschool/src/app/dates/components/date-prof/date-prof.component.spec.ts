import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateProfComponent } from './date-prof.component';

describe('DateProfComponent', () => {
  let component: DateProfComponent;
  let fixture: ComponentFixture<DateProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
