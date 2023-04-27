import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectReviewComponent } from './collect-review.component';

describe('CollectReviewComponent', () => {
  let component: CollectReviewComponent;
  let fixture: ComponentFixture<CollectReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
