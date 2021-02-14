import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { LessonDetail } from "../model/lesson-detail";
import { CoursesService } from "./courses.service";

@Injectable({
  providedIn: "root",
})
export class LessonDetailResolver implements Resolve<LessonDetail> {
  constructor(private courseService: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<LessonDetail> {
    const url = route.parent.paramMap.get("courseUrl");
    const seqNo = route.paramMap.get("lessonSeqNo");

    return this.courseService.loadLessonDetail(url, seqNo);
  }
}
