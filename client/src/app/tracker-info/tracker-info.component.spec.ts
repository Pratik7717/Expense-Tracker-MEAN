import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerInfoComponent } from './tracker-info.component';

describe('TrackerInfoComponent', () => {
  let component: TrackerInfoComponent;
  let fixture: ComponentFixture<TrackerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
