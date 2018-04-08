import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/User';
import {Observable} from 'rxjs/Observable';

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
  constructor(
  ) { }

  ngOnInit() {}
  copyField(key) {
    this.change.emit(key);
  }
}
