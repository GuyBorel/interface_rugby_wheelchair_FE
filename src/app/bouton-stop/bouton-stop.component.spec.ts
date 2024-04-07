import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonStopComponent } from './bouton-stop.component';

describe('BoutonStopComponent', () => {
  let component: BoutonStopComponent;
  let fixture: ComponentFixture<BoutonStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonStopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoutonStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
