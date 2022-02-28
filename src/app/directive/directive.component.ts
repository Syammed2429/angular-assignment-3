import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent {
  passage: string = 'Hello Button';
  buttonStatus: boolean = false;
  buttonUpdatedLog: any = [];

  buttonToggle() {
    this.buttonStatus = !this.buttonStatus;
    this.buttonUpdatedLog.push(new Date());
  }
  updateParagraph() {
    this.buttonStatus = true;
    this.buttonUpdatedLog.push(this.passage);
    console.log('this.passage:', this.passage);
  }
}
