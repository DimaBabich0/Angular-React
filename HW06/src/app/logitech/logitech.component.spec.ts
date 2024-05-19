import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogitechComponent } from './logitech.component';

describe('LogitechComponent', () => {
  let component: LogitechComponent;
  let fixture: ComponentFixture<LogitechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogitechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogitechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
