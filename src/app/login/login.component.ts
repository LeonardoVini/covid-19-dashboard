import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public show_bar: boolean = false

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigate(): void {
    this.show_bar = true

    setTimeout(() => {
      this.router.navigate(['/homepage'])
    }, 2000)
  }
}
