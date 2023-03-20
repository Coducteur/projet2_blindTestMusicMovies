import { TestBed } from '@angular/core/testing';

import { AskingQuestionsService } from './asking-questions.service';

describe('AskingQuestionsService', () => {
  let service: AskingQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskingQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
