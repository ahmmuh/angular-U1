import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UserListItemComponent } from "./components/user-list-item/user-list-item.component";
import { EditUsersComponent } from "./components/edit-users/edit-users.component";
import { UsersListComponent } from "./components/users-list/users-list.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserListItemComponent,
    EditUsersComponent,
    UsersListComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
