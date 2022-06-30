import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbMainComponent } from './kb-main.component';

describe('KbMainComponent', () => {
  let component: KbMainComponent;
  let fixture: ComponentFixture<KbMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
