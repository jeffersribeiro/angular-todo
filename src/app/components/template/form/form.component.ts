import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  public dataSource: Array<any> = [
    {
      id: 1,
      name: "Jefferson",
      vencimento: "2020-01-01",
      price: 12.02,
    },
    {
      id: 2,
      name: "Maria",
      vencimento: "2020-01-01",
      price: 12.02,
    },
    {
      id: 3,
      name: "João",
      vencimento: "2020-01-01",
      price: 12.02,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  name = "maria";
  setValue() {
    let count = this.dataSource.length + 1;
    this.dataSource.push({ id: count, name: this.name });
  }
}
