import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarerUnProblemeComponent } from './declarer-un-probleme.component';

describe('DeclarerUnProblemeComponent', () => {
  let component: DeclarerUnProblemeComponent;
  let fixture: ComponentFixture<DeclarerUnProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
