import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header-wrapper">
      <div class="topNav col-lg-12">
        <button routerLink="/contact-us" class="btn btn-primary">Contact Us</button>
        <a routerLink="/log-on" style="float: right" href="#">Log Out</a>
      </div>
      <div class="clearfix"></div>
      <div class="logoNav col-lg-12" style="background-color: #3c3c3c;">
        <img src="../../../assets/images/logo-White.png" alt="" style="height: 45px;
">
      </div>
    </div>
  `
})
export class HeaderComponent { }
