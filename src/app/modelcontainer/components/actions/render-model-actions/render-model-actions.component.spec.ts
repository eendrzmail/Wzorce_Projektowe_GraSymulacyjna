import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderModelActionsComponent } from './render-model-actions.component';

describe('RenderModelActionsComponent', () => {
  let component: RenderModelActionsComponent;
  let fixture: ComponentFixture<RenderModelActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderModelActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderModelActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
