import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructAnswersComponent } from './construct-answers.component';

describe('ConstructAnswersComponent', () => {
  let component: ConstructAnswersComponent;
  let fixture: ComponentFixture<ConstructAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
