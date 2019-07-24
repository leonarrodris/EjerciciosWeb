import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstudiantesComponent } from './form-estudiantes.component';

describe('FormEstudiantesComponent', () => {
  let component: FormEstudiantesComponent;
  let fixture: ComponentFixture<FormEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
