import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../services/auth.guard";
import { ConfirmExitGuard } from "../services/confirm-exit.guard";
import { CourseComponent } from "./course/course.component";
import { HomeComponent } from "./home/home.component";
import { LessonDetailComponent } from "./lesson/lesson-detail.component";
import { LessonsListComponent } from "./lessons-list/lessons-list.component";
import { CourseResolver } from "./services/course.resolver";
import { LessonDetailResolver } from "./services/lesson-detail.resolver";
import { LessonResolver } from "./services/lesson.resolver";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: ":courseUrl",
    component: CourseComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canDeactivate: [ConfirmExitGuard],
    resolve: {
      course: CourseResolver,
    },
    children: [
      {
        path: "",
        component: LessonsListComponent,
        resolve: {
          lessons: LessonResolver,
        },
      },
      {
        path: "lessons/:lessonSeqNo",
        component: LessonDetailComponent,
        resolve: {
          lesson: LessonDetailResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CourseResolver, LessonResolver, LessonDetailResolver, AuthGuard],
})
export class CoursesRoutingModule {}
