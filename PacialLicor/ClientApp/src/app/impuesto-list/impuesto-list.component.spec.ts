import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoListComponent } from './impuesto-list.component';

describe('ImpuestoListComponent', () => {
  let component: ImpuestoListComponent;
  let fixture: ComponentFixture<ImpuestoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpuestoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
