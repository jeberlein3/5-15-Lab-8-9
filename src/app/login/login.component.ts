import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';
export interface IUser {
  id?: number;
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: IUser = { username: null, password: null };
  constructor(
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) {
  }

  ngOnInit() {

  }
  login() {
    console.log('from login component login()');
  }

}
