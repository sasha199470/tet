import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/User';
import {Observable} from 'rxjs/Observable';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  optionDoc = [
    'Паспорт',
    'Загран паспорт',
    'Паспорт моряка'
  ];
  
  @Input() user: User;
  @Input() type;
  @Input() copy;
  
  @Output() change = new EventEmitter;

  onlyRusTextFormControl = new FormControl({disabled: false}, [
    Validators.required,
    Validators.pattern(/^[\u0400-\u04FF]*$/),
  ]);

  formControls = new Map<string, FormControl>();
  
  constructor() { }

  ngOnInit() {}
  
  copyField(key) {
    this.change.emit(key);
  }
}
