import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgControl} from "@angular/forms";

@Component({
	selector: 'ax-control',
	templateUrl: './ax-control.component.html',
	styleUrls: ['./ax-control.component.less']
})
export class AxControlComponent implements OnInit {

	@Input() title: string | undefined;

	// @ts-ignore
	@ViewChild('input') input: ElementRef<any>;

	private control: NgControl | undefined;
	private controlType: string = '';
	// @ts-ignore
	private validators: [{ name: string, changeState: (newValue: boolean) => void }] = [];


	// list of input types, that don't need any icon
	// trying to add scaling possibility to this component in future
	private typesWithoutButtons = ['checkbox', 'radio'];

	constructor() {
	}

	public get isDisabled() {
		return this.control?.disabled;
	}

	public get isInvalid() {
		return !this.typesWithoutButtons.includes(this.controlType) && this.control?.errors && !this.isInFocus && ((this.control?.touched || this.control?.dirty));
	}

	public get isInFocus() {
		return !this.typesWithoutButtons.includes(this.controlType) && this.input?.nativeElement.querySelector('input') === document.activeElement;
	}

	public get isTextInput() {
		return !this.typesWithoutButtons.includes(this.controlType);
	}

	public setControl(control: NgControl, controlType: string) {
		this.control = control;
		this.controlType = controlType;
		this.control.control?.valueChanges.subscribe(() => this.validate());
	}

	public addValidator(validator: { name: string; changeState: (newValue: boolean) => void }) {
		this.validators.push(validator);
	}

	public onClick($event: Event) {
		$event.stopPropagation();
		if (this.control?.valid && this.control.value) {
			this.control?.reset();
			this.validators.forEach(validator => validator.changeState(false));
		}
	}

	ngOnInit(): void {
	}

	private validate() {
		(this.control?.touched || this.control?.dirty) && this.validators?.forEach(validator => {
			validator.changeState(!!this.control?.control?.getError(validator.name));
		});
	}


}
