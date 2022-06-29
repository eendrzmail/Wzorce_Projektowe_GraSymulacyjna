import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchvizModelActionsComponent } from './archviz-model-actions.component';

describe('ArchvizModelActionsComponent', () => {
  let component: ArchvizModelActionsComponent;
  let fixture: ComponentFixture<ArchvizModelActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchvizModelActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchvizModelActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
