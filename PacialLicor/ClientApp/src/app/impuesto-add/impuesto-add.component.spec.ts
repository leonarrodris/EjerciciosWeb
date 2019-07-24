import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoAddComponent } from './impuesto-add.component';

describe('ImpuestoAddComponent', () => {
  let component: ImpuestoAddComponent;
  let fixture: ComponentFixture<ImpuestoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpuestoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
