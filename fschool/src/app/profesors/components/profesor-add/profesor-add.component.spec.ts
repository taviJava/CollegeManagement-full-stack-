import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorAddComponent } from './profesor-add.component';

describe('ProfesorAddComponent', () => {
  let component: ProfesorAddComponent;
  let fixture: ComponentFixture<ProfesorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
