import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroButtonComponent } from './micro-button.component';

describe('MicroButtonComponent', () => {
  let component: MicroButtonComponent;
  let fixture: ComponentFixture<MicroButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
