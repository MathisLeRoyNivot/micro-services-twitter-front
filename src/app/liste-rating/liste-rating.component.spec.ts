import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRatingComponent } from './liste-rating.component';

describe('ListeRatingComponent', () => {
  let component: ListeRatingComponent;
  let fixture: ComponentFixture<ListeRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
