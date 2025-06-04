import { Routes } from '@angular/router';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'subjects/:subjectName',
    component: SubjectsComponent,
  },
  {
    path: 'allStudents',
    component: AllStudentsComponent,
  },
];
