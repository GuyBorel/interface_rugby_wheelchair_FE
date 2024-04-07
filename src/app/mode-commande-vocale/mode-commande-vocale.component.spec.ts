import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeCommandeVocaleComponent } from './mode-commande-vocale.component';

describe('ModeCommandeVocaleComponent', () => {
  let component: ModeCommandeVocaleComponent;
  let fixture: ComponentFixture<ModeCommandeVocaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeCommandeVocaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeCommandeVocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
