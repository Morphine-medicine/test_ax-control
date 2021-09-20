import { Component } from '@angular/core';
import {AbstractControl, Validator} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ax-control';
  public inputValue: string = '';

  public checkbox1Value: boolean = false;

}

export class trueValueValidatorCheckbox implements Validator{
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value) {
      return { 'trueValidator': true };
    }
    return null;
  }
}
