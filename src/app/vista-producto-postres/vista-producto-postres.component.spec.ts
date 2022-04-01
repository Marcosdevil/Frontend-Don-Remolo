import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaProductoPostresComponent } from './vista-producto-postres.component';

describe('VistaProductoPostresComponent', () => {
  let component: VistaProductoPostresComponent;
  let fixture: ComponentFixture<VistaProductoPostresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaProductoPostresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaProductoPostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
