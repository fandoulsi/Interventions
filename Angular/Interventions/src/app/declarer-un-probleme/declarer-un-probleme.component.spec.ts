import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DeclarerUnProblemeComponent } from './declarer-un-probleme.component';

describe('DeclarerUnProblemeComponent', () => {
  let component: DeclarerUnProblemeComponent;
  let fixture: ComponentFixture<DeclarerUnProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ DeclarerUnProblemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarerUnProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Zone Prénom valide avec 3 caractères', () => {
    let zone = component.declarerUnProblemeForm.controls['Prenom'];
    zone.setValue('a'.repeat(3));
    expect(zone.valid).toBeTruthy();
  });


  it('Zone Prénom invalide avec 2 caractères', () =>{
    let errors = [];
    let zone = component.declarerUnProblemeForm.get('Prenom');
    zone.setValue('a'.repeat(2));
    errors = zone.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('Zone Prénom valide avec 200 caractères', () => {
    let zone = component.declarerUnProblemeForm.controls['Prenom'];
    zone.setValue('a'.repeat(200));
    expect(zone.valid).toBeTruthy();
  });

  it('Zone Prénom invalide avec aucune valeur', () => {
    let errors = [];
    let zone = component.declarerUnProblemeForm.get('Prenom');
    zone.setValue('a'.repeat(0));
    errors = zone.errors || {};
    expect(errors['required']).toBeTruthy();
  });



  

  


});
