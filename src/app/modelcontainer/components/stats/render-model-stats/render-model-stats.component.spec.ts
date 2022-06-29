import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderModelStatsComponent } from './render-model-stats.component';

describe('RenderModelStatsComponent', () => {
  let component: RenderModelStatsComponent;
  let fixture: ComponentFixture<RenderModelStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderModelStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderModelStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
