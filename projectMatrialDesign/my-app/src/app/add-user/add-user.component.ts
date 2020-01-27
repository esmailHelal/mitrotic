import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  constructor(private _UserService: UserService, private route: Router) {}
  form(obj) {
    console.log(obj);
    this._UserService.adduser(obj).subscribe(res => {
      console.log(res);
      this.route.navigateByUrl("");
    });
  }

  ngOnInit() {}
}
