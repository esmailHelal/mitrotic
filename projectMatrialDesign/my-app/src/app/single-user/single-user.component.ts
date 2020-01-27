import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Users } from "./../userModel";
@Component({
  selector: "app-single-user",
  templateUrl: "./single-user.component.html",
  styleUrls: ["./single-user.component.css"]
})
export class SingleUserComponent implements OnInit {
  mydata: any;
  constructor(
    private _UserService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getname();
  }

  getname(): void {
    const id: string = this.route.snapshot.params.id;
    this._UserService.getuser1(id).subscribe(data => {
      this.mydata = data;
    });
  }

  ngOnInit() {}
}
