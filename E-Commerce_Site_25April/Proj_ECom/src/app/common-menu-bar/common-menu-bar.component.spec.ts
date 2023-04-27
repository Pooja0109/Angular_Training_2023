import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMenuBarComponent } from './common-menu-bar.component';

describe('CommonMenuBarComponent', () => {
  let component: CommonMenuBarComponent;
  let fixture: ComponentFixture<CommonMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonMenuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
