import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchvizModelStatsComponent } from './archviz-model-stats.component';

describe('ArchvizModelStatsComponent', () => {
  let component: ArchvizModelStatsComponent;
  let fixture: ComponentFixture<ArchvizModelStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchvizModelStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchvizModelStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
