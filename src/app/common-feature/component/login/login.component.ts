import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CommonService } from "../../common.service";
import { User } from "../../entities/user";
import AOS from "aos";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  hide = true;
  user:User;
  constructor(
    private router: Router,
    private commonService: CommonService,
    ) {
      this.user = new User();
    }

  ngOnInit(): void {
    AOS.init();
  }
  login(form: NgForm, user): any {
    if (form.valid) {
      this.commonService.login(user).subscribe(
      (arg) => {
        if (!arg.HasErrors) {
          sessionStorage.setItem("AccessToken", arg.token);
          sessionStorage.setItem("CurrentUser", JSON.stringify(arg));
          if (arg.role === "Admin") {
            this.router.navigate(["/terminalOperator"]);
          }
        } else {
          alert(arg.message);
        }
      },
      (err) =>{
        alert("Something went wrong");
      }
     );
    }
  }
}
