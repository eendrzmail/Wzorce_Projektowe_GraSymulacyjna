import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModelActionsComponent } from './game-model-actions.component';

describe('GameModelActionsComponent', () => {
  let component: GameModelActionsComponent;
  let fixture: ComponentFixture<GameModelActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameModelActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModelActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
