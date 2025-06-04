import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { UserComponent } from '../user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, RouterModule, UserComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
   teachersProfile: any;

  constructor(private studentService: StudentService) {
    this.studentService.getTeachersProfile().subscribe((res: any) => {
      this.teachersProfile = res;
    });
  }

}
