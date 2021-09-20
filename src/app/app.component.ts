import {Component} from '@angular/core';

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
