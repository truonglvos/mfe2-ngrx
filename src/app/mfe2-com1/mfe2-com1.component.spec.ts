import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe2Com1Component } from './mfe2-com1.component';

describe('Mfe2Com1Component', () => {
  let component: Mfe2Com1Component;
  let fixture: ComponentFixture<Mfe2Com1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mfe2Com1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mfe2Com1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
