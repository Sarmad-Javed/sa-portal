import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'saPortal';
  userInfo: any;
  
  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('user') || '{}');
  }
}
