import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesAddComponent } from './dates-add.component';

describe('DatesAddComponent', () => {
  let component: DatesAddComponent;
  let fixture: ComponentFixture<DatesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
