import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'Inter-declarer-un-probleme',
  templateUrl: './declarer-un-probleme.component.html',
  styleUrls: ['./declarer-un-probleme.component.css']
})
export class DeclarerUnProblemeComponent implements OnInit {
  declarerUnProblemeForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.declarerUnProblemeForm = this.fb.group({
      Prenom: ['', [Validators.minLength(3), , Validators.required]]
    });
  }

}
