import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeSuiveurDeBalleComponent } from './mode-suiveur-de-balle.component';

describe('ModeSuiveurDeBalleComponent', () => {
  let component: ModeSuiveurDeBalleComponent;
  let fixture: ComponentFixture<ModeSuiveurDeBalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeSuiveurDeBalleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModeSuiveurDeBalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
