import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintModelStatsComponent } from './print-model-stats.component';

describe('PrintModelStatsComponent', () => {
  let component: PrintModelStatsComponent;
  let fixture: ComponentFixture<PrintModelStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintModelStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintModelStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
