import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPerformanceComponent } from './book-performance.component';

describe('BookPerformanceComponent', () => {
  let component: BookPerformanceComponent;
  let fixture: ComponentFixture<BookPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPerformanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookPerformanceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
