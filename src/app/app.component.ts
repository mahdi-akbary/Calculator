import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string = ''
  isOpClicked: boolean = false;
  result: number;
  strNum: string = '';
  operator: string;
  operatorAssigned: boolean = false;
  resultDisplay: number;

  entered(input) {
    this.strNum += input;
    this.display += input;
    if (this.operatorAssigned) {
      this.calculate(+this.strNum);
      return;
    }
    this.result = +this.strNum;
    this.resultDisplay = this.result;
  }
  operate(input) {
    this.display += input;
    if (this.operatorAssigned) {
      this.result = this.resultDisplay
    }

    this.operatorAssigned = true;
    this.operator = input;
    this.strNum = '';
    this.isOpClicked = false;
  }
  calculate(input: number) {
    this.resultDisplay = this.result;
    switch (this.operator) {
      case '+': this.resultDisplay += input; break;
      case '-': this.resultDisplay -= input; break;
      case '*': this.resultDisplay *= input; break;
      case '/': this.resultDisplay /= input; break;
      default: alert('Not a valid Operator'); break;
    }
  }
  equalsTo() {
    this.result = this.resultDisplay;
  }
  clearAll() {
    this.display = '';
    this.isOpClicked = false;
    this.strNum = '';
    this.operatorAssigned = false;
    this.resultDisplay = 0;
  }


}
