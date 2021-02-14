import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { LessonSummary } from "../model/lesson-summary";
import { CoursesService } from "./courses.service";

@Injectable({
  providedIn: "root",
})
export class LessonResolver implements Resolve<LessonSummary[]> {
  constructor(private couserService: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<LessonSummary[]> {
    const url = route.paramMap.get("courseUrl");
    return this.couserService.loadAllCourseLessonsSummary(url);
  }
}
