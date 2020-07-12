import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  //tar emot users som input from dashboard
  @Input() users: string[];

  toggleClass = false;
  constructor() {}

  ngOnInit(): void {}
  toggleColor() {
    this.toggleClass = !this.toggleClass;
  }
}
