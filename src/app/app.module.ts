import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AxControlComponent } from './ax-control/ax-control.component';
import { ValidationComponent } from './validation/validation.component';
import {FormsModule} from "@angular/forms";
import {InputDirective, ValidatorDirective} from "./ax-control/ax-control.directive";
import {trueValueValidator} from "./Validators/customValidators";

@NgModule({
  declarations: [
    AppComponent,
    AxControlComponent,
    ValidationComponent,
    InputDirective,
    ValidatorDirective,
    trueValueValidator
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
