import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  courseId: string = '';
  userInfo: any;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('user') || '{}');
  }

  searchCourse() {
    this.http.get<any[]>('/assets/students.json').subscribe(data => {
      const course = data.find(course => course.id === this.courseId);
      if (course) {
        console.log(course)
        this.router.navigate(['/course/'+course.id]);
      } else {
        alert('Course not found');
      }
    });
  }
}
