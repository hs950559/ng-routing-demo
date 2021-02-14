import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { Course } from "../model/course";
import { CoursesService } from "./courses.service";

@Injectable({
  providedIn: "root",
})
export class CourseResolver implements Resolve<Course> {
  constructor(private courseService: CoursesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Course> {
    const url = route.paramMap.get("courseUrl");
    return this.courseService.loadCourseByUrl(url);
  }
}
