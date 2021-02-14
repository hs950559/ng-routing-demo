import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  closeChatViaParent(): void {
    this.router.navigate(
      [
        // NOTE: No relative-path navigation is required because we are accessing
        // the parent's "activatedRoute" instance. As such, this will be executed
        // as if we were doing this in the parent view component.
        {
          outlets: {
            chat: null,
          },
        },
      ],
      {
        relativeTo: this.route.parent, // <--- PARENT activated route.
      }
    );
  }
}
