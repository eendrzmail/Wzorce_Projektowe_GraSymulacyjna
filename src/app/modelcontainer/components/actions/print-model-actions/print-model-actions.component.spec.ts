import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintModelActionsComponent } from './print-model-actions.component';

describe('PrintModelActionsComponent', () => {
  let component: PrintModelActionsComponent;
  let fixture: ComponentFixture<PrintModelActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintModelActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintModelActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
