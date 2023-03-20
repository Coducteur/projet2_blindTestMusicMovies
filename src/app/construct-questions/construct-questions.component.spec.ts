import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructQuestionsComponent } from './construct-questions.component';

describe('ConstructQuestionsComponent', () => {
  let component: ConstructQuestionsComponent;
  let fixture: ComponentFixture<ConstructQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
