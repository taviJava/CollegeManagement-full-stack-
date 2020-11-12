import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorMateriaComponent } from './professor-materia.component';

describe('ProfessorMateriaComponent', () => {
  let component: ProfessorMateriaComponent;
  let fixture: ComponentFixture<ProfessorMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
