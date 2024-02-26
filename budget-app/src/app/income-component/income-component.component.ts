import { Component } from '@angular/core';

@Component({
  selector: 'app-income-component',
  templateUrl: './income-component.component.html',
  styleUrls: ['./income-component.component.css']
})
export class IncomeComponentComponent {
  incomes: { id: number, name: string, date: Date, amount: number }[] = [
    { id: 1, name: "Stipendio", date: new Date(), amount: 1200 },
    { id: 2, name: "Bonus mezzi", date: new Date(), amount: 60 },
    { id: 3, name: "Vendite Vinted", date: new Date(), amount: 40 },
    { id: 4, name: "Regalo", date: new Date(), amount: 100 }
  ];

  newIncome: { id: number, name: string, date: Date, amount: number } = { id: 0, name: "", date: new Date(), amount: 0 };

  adds() {
    this.newIncome.id = this.incomes.length + 1;
    this.incomes.push({ id: this.newIncome.id, name: this.newIncome.name, date: this.newIncome.date, amount: this.newIncome.amount });
    this.newIncome = { id: 0, name: "", date: new Date(), amount: 0 };
  }

  removes(index: number) {
    this.incomes.splice(index, 1);
  }

  total(): number {
    return this.incomes.reduce((sum, income) => sum + income.amount, 0);
  }
}
