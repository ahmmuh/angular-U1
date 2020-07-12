import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  public users: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  //lägga till användaren til array med hjälp av push metod
  addUser(name: string) {
    this.users.push(name);
  }

  // remove metoden tar in name som param
  //sedan skapat variabel index för att kunna få tag på index på arrayen och ta bort den
  removeUser(name: string) {
    const index: number = this.users.indexOf(name);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
