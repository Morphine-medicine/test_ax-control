import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";
import {Directive} from "@angular/core";

@Directive({
	selector: '[trueValueValidatorCheckbox]',
	providers: [{
		provide: NG_VALIDATORS,
		useExisting: trueValueValidator,
		multi: true
	}]
})
export class trueValueValidator implements Validator {
	validate(control: AbstractControl): { [key: string]: any } | null {
		if (control.value) {
			return {'trueValidator': true};
		}
		return null;
	}
}
