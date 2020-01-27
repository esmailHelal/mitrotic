import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  constructor(
    private _UserservicesService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  myData: any = [{ name: "", email: "", phone: "" }];
  ngOnInit() {
    this.getMyData();
  }
  getMyData(): void {
    const id: string = this.route.snapshot.params.id;
    this._UserservicesService
      .getuser1(id)
      .subscribe(data => (this.myData = data));
  }
  formSubmit(obj) {
    console.log(obj);
    const id: string = this.route.snapshot.params.id;
    this._UserservicesService.getuser1(id).subscribe(data => {
      this.myData = data;
      this._UserservicesService.updateuser(id, obj).subscribe(res => {});
    });
    this.router.navigateByUrl("");
  }
}
