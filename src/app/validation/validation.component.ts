import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'validation',
	templateUrl: './validation.component.html',
	styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

	// @ts-ignore
	@Input() when: string;
	// @ts-ignore
	public shouldShowError = false;

	constructor() {
	}

	public changeShouldShowError = (newValue: boolean) => {
		this.shouldShowError = newValue
	}

	ngOnInit(): void {
	}

}
