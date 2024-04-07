import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModePilotageManuelComponent } from './mode-pilotage-manuel.component';

describe('ModePilotageManuelComponent', () => {
  let component: ModePilotageManuelComponent;
  let fixture: ComponentFixture<ModePilotageManuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModePilotageManuelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModePilotageManuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
