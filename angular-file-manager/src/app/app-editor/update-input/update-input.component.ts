import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FilesService } from "../../files.service";
import { EventService } from "../../event.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-update-input",
  templateUrl: "./update-input.component.html",
  styleUrls: ["./update-input.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateInputComponent {
  updateForm = new FormGroup({
    name: new FormControl(""),
    data: new FormControl("")
  });
  private subscription: Subscription;

  constructor(
    private fileService: FilesService,
    private eventService: EventService
  ) {}

  onSubmit() {
    this.updateFile(this.updateForm.value);
    this.updateForm.reset();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateFile({ name, data }) {
    this.subscription = this.fileService
      .updateFile(name, data)
      .subscribe(() => {
        this.eventService.event.next("update");
      });
  }
}
