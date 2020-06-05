import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTrabajosComponent } from './agregar-trabajos.component';

describe('AgregarTrabajosComponent', () => {
  let component: AgregarTrabajosComponent;
  let fixture: ComponentFixture<AgregarTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
