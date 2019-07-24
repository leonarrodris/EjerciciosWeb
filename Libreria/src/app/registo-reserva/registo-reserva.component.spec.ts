import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistoReservaComponent } from './registo-reserva.component';

describe('RegistoReservaComponent', () => {
  let component: RegistoReservaComponent;
  let fixture: ComponentFixture<RegistoReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistoReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
