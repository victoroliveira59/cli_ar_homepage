import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgencyButtonComponent } from './urgency-button.component';

describe('UrgencyButtonComponent', () => {
  let component: UrgencyButtonComponent;
  let fixture: ComponentFixture<UrgencyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrgencyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrgencyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
