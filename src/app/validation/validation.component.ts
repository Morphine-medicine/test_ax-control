import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

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

  public changeShouldShowError = (newValue: boolean) => {
    this.shouldShowError = newValue
}

  constructor() { }

  ngOnInit(): void {
  }

}
