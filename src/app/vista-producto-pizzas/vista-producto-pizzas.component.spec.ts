import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaProductoPizzasComponent } from './vista-producto-pizzas.component';

describe('VistaProductoPizzasComponent', () => {
  let component: VistaProductoPizzasComponent;
  let fixture: ComponentFixture<VistaProductoPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaProductoPizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaProductoPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
