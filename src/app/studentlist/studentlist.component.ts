import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent {
  students: any[] = [];
  filteredStudents: any[] = [];
  selectedStudent: any;
  userInfo: any;
  constructor(private router: Router, private route:ActivatedRoute,private http: HttpClient) {}

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('user') || '{}');
    

    const courseId = this.route.snapshot.params['courseId'];
    this.http.get<any[]>('/assets/students.json').subscribe(data => {
      const course = data.find(course => course.id === courseId);
      if (course) {
        // console.log(course)
        this.students  = course.students;
        this.filteredStudents = [...this.students];
      } else {
        alert('Course not found');
      }
    });
  }
  applyFilter(event: Event, field: string) {
  
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredStudents = this.students.filter(student => student[field].toString().toLowerCase().includes(filterValue));
    
  }

  onRowSelect(event: any) {
    this.router.navigate(['/student-details'], { queryParams: { student: JSON.stringify(event.data) } });
  }
  
}
