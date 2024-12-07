import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeCompteurComponent } from './demande-compteur.component';

describe('DemandeCompteurComponent', () => {
  let component: DemandeCompteurComponent;
  let fixture: ComponentFixture<DemandeCompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeCompteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
