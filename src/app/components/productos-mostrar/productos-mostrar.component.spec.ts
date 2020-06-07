import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMostrarComponent } from './productos-mostrar.component';

describe('ProductosMostrarComponent', () => {
  let component: ProductosMostrarComponent;
  let fixture: ComponentFixture<ProductosMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
