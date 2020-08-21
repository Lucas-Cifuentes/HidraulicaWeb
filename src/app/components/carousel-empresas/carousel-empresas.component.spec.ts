import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselEmpresasComponent } from './carousel-empresas.component';

describe('CarouselEmpresasComponent', () => {
  let component: CarouselEmpresasComponent;
  let fixture: ComponentFixture<CarouselEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
