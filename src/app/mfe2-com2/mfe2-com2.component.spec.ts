import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe2Com2Component } from './mfe2-com2.component';

describe('Mfe2Com2Component', () => {
  let component: Mfe2Com2Component;
  let fixture: ComponentFixture<Mfe2Com2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mfe2Com2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mfe2Com2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
