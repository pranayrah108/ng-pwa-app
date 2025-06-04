import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatListModule, CommonModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {
  studentData: any;
  topper: any = {
    name: '',
    marks: Number.MIN_SAFE_INTEGER,
  };

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
    this.route.params
      .pipe(
        switchMap((res: any) =>
          this.studentService.getSubjectData(res?.subjectName)
        )
      )
      .subscribe((res: any) => {
        this.studentData = res;
        this.updateTopper();
      });
  }

  updateTopper() {
    for (let i = 0; i < this.studentData.length; i++) {
      if (this.topper.marks < this.studentData[i].marks) {
        this.topper = this.studentData[i];
      }
    }
  }
}

