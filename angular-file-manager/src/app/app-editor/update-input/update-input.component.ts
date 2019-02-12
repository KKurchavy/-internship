import { Component, OnInit } from "@angular/core";
import { FilesService } from "../../files.service";
import { EventService } from "../../event.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-update-input",
  templateUrl: "./update-input.component.html",
  styleUrls: ["./update-input.component.css"]
})
export class UpdateInputComponent implements OnInit {
  updateForm = new FormGroup({
    name: new FormControl(""),
    data: new FormControl("")
  });

  constructor(private fileService: FilesService, private eventService: EventService) {}

  ngOnInit() {}

  private updateFile({ name, data }) {
    this.fileService.updateFile(name, data).subscribe(() => {
      this.eventService.event.next('update');
    });
  }

  onSubmit() {
    this.updateFile(this.updateForm.value);
    this.updateForm.reset();
  }
}
