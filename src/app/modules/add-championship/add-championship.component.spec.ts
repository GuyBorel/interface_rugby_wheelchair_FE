import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChampionshipComponent } from './add-championship.component';

describe('AddChampionshipComponent', () => {
  let component: AddChampionshipComponent;
  let fixture: ComponentFixture<AddChampionshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChampionshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddChampionshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
