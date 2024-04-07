import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeCartographieComponent } from './mode-cartographie.component';

describe('ModeCartographieComponent', () => {
  let component: ModeCartographieComponent;
  let fixture: ComponentFixture<ModeCartographieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeCartographieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeCartographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
