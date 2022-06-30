import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbModifiersComponent } from './kb-modifiers.component';

describe('KbModifiersComponent', () => {
  let component: KbModifiersComponent;
  let fixture: ComponentFixture<KbModifiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbModifiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbModifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
