import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaEstComponent } from './matricula-est.component';

describe('MatriculaEstComponent', () => {
  let component: MatriculaEstComponent;
  let fixture: ComponentFixture<MatriculaEstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaEstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
