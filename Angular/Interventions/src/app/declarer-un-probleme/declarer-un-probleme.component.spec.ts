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

  it('Zone Prénom invalide avec 2 caractères', () =>{
    let errors = [];
    let zone = component.declarerUnProblemeForm.get('Prenom');
    zone.setValue('a'.repeat(2));
    errors = zone.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

});
