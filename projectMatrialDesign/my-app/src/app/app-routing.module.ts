import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";
import { SingleUserComponent } from "./single-user/single-user.component";
import { DeletUserComponent } from "./delet-user/delet-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { ListUserComponent } from "./list-user/list-user.component";

const routes: Routes = [
  { path: "", component: ListUserComponent, pathMatch: "full" },
  { path: "NewUser", component: AddUserComponent, pathMatch: "full" },
  { path: "Edit/:id", component: EditUserComponent, pathMatch: "full" },
  { path: "del", component: DeletUserComponent, pathMatch: "full" },
  { path: ":id", component: SingleUserComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
