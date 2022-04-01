import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaProductoEmpanadasComponent } from './vista-producto-empanadas.component';

describe('VistaProductoEmpanadasComponent', () => {
  let component: VistaProductoEmpanadasComponent;
  let fixture: ComponentFixture<VistaProductoEmpanadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaProductoEmpanadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaProductoEmpanadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
