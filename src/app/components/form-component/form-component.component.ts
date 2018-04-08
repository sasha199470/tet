import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/User';
import {Observable} from 'rxjs/Observable';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, Validators} from '@angular/forms';
import { isUndefined } from 'util';
import * as moment from 'moment';

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

  onlyRusTextFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[\u0400-\u04FF]*$/),
  ]);

  onlyNumberFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d+$/),
  ]);

  dateFormControl = new FormControl('', [
    Validators.required,
    this.dateMinValidator
  ]);

  constructor() { }

  ngOnInit() {}
  
  copyField(key) {
    this.change.emit(key);
  }

  dateMinValidator(control: FormControl) {
    const date = moment(control.value, 'DD.MM.YYYY');

    if (!date.isValid()) {
      return {
        dateInvalid: {
          data: control.value
        }
      } 
    }
    if (date < moment('01.01.1991', 'DD.MM.YYYY')) {
      return {
        dateMin: {
          date: date
        }
      }
    }

    return null;
  }
}
