import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';

import { AppComponent } from './components/root-component/app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormComponentComponent } from './components/form-component/form-component.component';
import {MatFormFieldModule, MatInputModule, MatSelectModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from './services/user.service';
import {DisableControlDirective} from './disable-control.directive'

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    DisableControlDirective  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule    
  ],
  providers: [
    UserService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
