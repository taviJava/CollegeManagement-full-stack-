import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateEvidenceComponent } from './date-evidence.component';

describe('DateEvidenceComponent', () => {
  let component: DateEvidenceComponent;
  let fixture: ComponentFixture<DateEvidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateEvidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
