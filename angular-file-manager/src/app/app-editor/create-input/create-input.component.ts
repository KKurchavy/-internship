import { Component, ChangeDetectionStrategy, OnDestroy } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FilesService } from "../../files.service";
import { EventService } from "../../event.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-create-input",
  templateUrl: "./create-input.component.html",
  styleUrls: ["./create-input.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateInputComponent implements OnDestroy {
  createForm = new FormGroup({
    name: new FormControl(''),
    data: new FormControl('')
  });
  private subscription: Subscription;

  constructor(
    private fileService: FilesService,
    private eventService: EventService,
  ) {}
  
  onSubmit() {
    this.createFile(this.createForm.value);
    this.createForm.reset();
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private createFile({ name, data }) {
    this.subscription = this.fileService.createFile(name, data).subscribe(() => {
      this.eventService.event.next("create");
    });
  }
}
