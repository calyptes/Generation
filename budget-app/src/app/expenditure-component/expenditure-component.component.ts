import { Component } from '@angular/core';

@Component({
  selector: 'app-expenditure-component',
  templateUrl: './expenditure-component.component.html',
  styleUrls: ['./expenditure-component.component.css']
})
export class ExpenditureComponentComponent {
  expenditures: { id: number, name: string, date: Date, amount: number }[] = [
    { id: 1, name: "Affitto", date: new Date(), amount: 700 },
    { id: 2, name: "Assicurazione", date: new Date(), amount: 35.50 },
    { id: 3, name: "Abbonamento mezzi", date: new Date(), amount: 20 },
    { id: 4, name: "Ricarica telefonica", date: new Date(), amount: 10 }
  ];

  newExpenditure: { id: number, name: string, date: Date, amount: number } = { id: 0, name: "", date: new Date(), amount: 0};

  adds() {
    this.newExpenditure.id = this.expenditures.length + 1;
    this.expenditures.push({ id: this.newExpenditure.id, name: this.newExpenditure.name, date: this.newExpenditure.date, amount: this.newExpenditure.amount });
    this.newExpenditure = { id: 0, name: "", date: new Date(), amount: 0 };
  }

  removes(index: number) {
    this.expenditures.splice(index, 1);
  }

  total(): number {
    return this.expenditures.reduce((sum, expenditure) => sum + expenditure.amount, 0);
  }
}
