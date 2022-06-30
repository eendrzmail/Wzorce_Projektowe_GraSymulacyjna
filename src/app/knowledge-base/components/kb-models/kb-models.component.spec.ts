import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbModelsComponent } from './kb-models.component';

describe('KbModelsComponent', () => {
  let component: KbModelsComponent;
  let fixture: ComponentFixture<KbModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
