import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFeatureComponent } from './common-feature.component';

describe('CommonFeatureComponent', () => {
  let component: CommonFeatureComponent;
  let fixture: ComponentFixture<CommonFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
