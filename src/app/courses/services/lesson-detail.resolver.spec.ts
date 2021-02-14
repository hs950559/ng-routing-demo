import { TestBed } from '@angular/core/testing';

import { LessonDetailResolver } from './lesson-detail.resolver';

describe('LessonDetailResolver', () => {
  let resolver: LessonDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LessonDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
