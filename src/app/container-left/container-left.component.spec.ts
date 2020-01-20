import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLeftComponent } from './container-left.component';

describe('ContainerLeftComponent', () => {
  let component: ContainerLeftComponent;
  let fixture: ComponentFixture<ContainerLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
