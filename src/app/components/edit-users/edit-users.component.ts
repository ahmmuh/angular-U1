import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-edit-users",
  templateUrl: "./edit-users.component.html",
  styleUrls: ["./edit-users.component.css"],
})
export class EditUsersComponent implements OnInit {
  @Output() addEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();
  name: string;
  constructor() {}

  ngOnInit(): void {}

  addUser(e) {
      // här skickar jag addUser metod med hjälp av output med eventemitter men också skicka in data från input(html)
    this.addEvent.emit(this.name);
  }
  // här skickar jag removeUser metod med hjälp av output med eventemitter men också skicka in data från input(html)
  removeUser(e) {
    this.removeEvent.emit(this.name);
  }
}
