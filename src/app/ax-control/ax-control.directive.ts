import {Directive, Optional} from "@angular/core";
import {NgControl} from "@angular/forms";
import {AxControlComponent} from "./ax-control.component";
import {ValidationComponent} from "../validation/validation.component";

@Directive({
  selector: 'input'
})
export class InputDirective {

  constructor(@Optional() private axControlComponent: AxControlComponent,
              @Optional() control: NgControl
  ) {
    if (axControlComponent && control) {
      this.axControlComponent.setControl(control);
    }
  }
}

@Directive({
  selector: 'validation'
})
export class ValidatorDirective {

  constructor(@Optional() private axControlComponent: AxControlComponent,
              @Optional() validator: ValidationComponent
  ) {
    if (axControlComponent && validator) {
      this.axControlComponent.addValidator({name: validator.when, changeState: validator.changeShouldShowError});
    }
  }
}
