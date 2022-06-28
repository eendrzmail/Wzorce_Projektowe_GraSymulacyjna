import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModelStatsComponent } from './game-model-stats.component';

describe('GameModelStatsComponent', () => {
  let component: GameModelStatsComponent;
  let fixture: ComponentFixture<GameModelStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameModelStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModelStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
