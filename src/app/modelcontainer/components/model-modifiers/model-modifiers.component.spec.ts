import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelModifiersComponent } from './model-modifiers.component';

describe('ModelModifiersComponent', () => {
  let component: ModelModifiersComponent;
  let fixture: ComponentFixture<ModelModifiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelModifiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelModifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
