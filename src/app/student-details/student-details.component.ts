import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
  student: any;
  userInfo: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('user') || '{}');

    this.route.queryParams.subscribe(params => {
      if (params['student']) {
        this.student = JSON.parse(params['student']);
      }
    });
  }
}
