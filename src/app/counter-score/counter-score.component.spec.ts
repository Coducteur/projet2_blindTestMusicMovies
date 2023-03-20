import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterScoreComponent } from './counter-score.component';

describe('CounterScoreComponent', () => {
  let component: CounterScoreComponent;
  let fixture: ComponentFixture<CounterScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
