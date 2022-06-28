import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelcontainerComponent } from './modelcontainer.component';

describe('ModelcontainerComponent', () => {
  let component: ModelcontainerComponent;
  let fixture: ComponentFixture<ModelcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
