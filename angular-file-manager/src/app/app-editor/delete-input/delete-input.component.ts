import { Component, ChangeDetectionStrategy, OnDestroy } from "@angular/core";
import { FilesService } from "../../files.service";
import { EventService } from "../../event.service";
import { FormControl } from "@angular/forms";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-delete-input",
  templateUrl: "./delete-input.component.html",
  styleUrls: ["./delete-input.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteInputComponent implements OnDestroy{
  deleteControl = new FormControl("");
  private subscription: Subscription;

  constructor(
    private fileService: FilesService,
    private eventService: EventService
  ) {}

  onSubmit() {
    this.deleteFile(this.deleteControl.value);
    this.deleteControl.reset();
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private deleteFile(name: string) {
    this.subscription = this.fileService.deleteFile(name).subscribe(() => {
      this.eventService.event.next("detete");
    });
  }
}
