import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate,
} from "@angular/router";
import { Observable } from "rxjs";
import { CourseComponent } from "../courses/course/course.component";

@Injectable({
  providedIn: "root",
})
export class ConfirmExitGuard implements CanDeactivate {
  canDeactivate(
    component: CourseComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return component.confirmExit();
  }
}
