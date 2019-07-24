import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoEditComponent } from './impuesto-edit.component';

describe('ImpuestoEditComponent', () => {
  let component: ImpuestoEditComponent;
  let fixture: ComponentFixture<ImpuestoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpuestoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
