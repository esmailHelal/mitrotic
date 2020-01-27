import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { UserService } from "./user.service";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { from } from "rxjs";
import { AddUserComponent } from "./add-user/add-user.component";
import { SingleUserComponent } from "./single-user/single-user.component";
import { DeletUserComponent } from "./delet-user/delet-user.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatrialModule } from "./matrial/matrial.module";
import { MatTableModule } from "@angular/material";
import { MypipePipe } from './mypipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    SingleUserComponent,
    DeletUserComponent,
    ListUserComponent,
    EditUserComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatrialModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
