import { Component, OnInit } from "@angular/core";
import { Users } from "./../userModel";
import { UserService } from "./../user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"]
})
export class ListUserComponent implements OnInit {
  mydata: any[] = [];
  displayedColumns: string[] = ["id", "name", "email", "phonebook", "Action"];
  dataSource: any;
  constructor(private _UserService: UserService, private router: Router) {
    this.getname();
  }

  getname(): void {
    this._UserService.getuser().subscribe(data => {
      this.mydata = data;

      this.dataSource = data;
      console.log(this.dataSource);
    });
  }
  ngOnInit() {
    this.getname();
  }
  delet(_id) {
    this._UserService.deletuser(_id).subscribe(res => {
      this.router
        .navigateByUrl("/del", { skipLocationChange: true })
        .then(() => {
          this.router.navigateByUrl("");
        });
    });
  }
}
