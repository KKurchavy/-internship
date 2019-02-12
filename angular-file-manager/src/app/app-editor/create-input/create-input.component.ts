import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { FilesService } from "../../files.service";
import { EventService } from "../../event.service";

@Component({
  selector: "app-create-input",
  templateUrl: "./create-input.component.html",
  styleUrls: ["./create-input.component.css"]
})
export class CreateInputComponent implements OnInit {
  createForm = new FormGroup({
    name: new FormControl(''),
    data: new FormControl('')
  });

  constructor(
    private fileService: FilesService,
    private eventService: EventService,
  ) {}

  ngOnInit() {}

  private createFile({ name, data }) {
    this.fileService.createFile(name, data).subscribe(() => {
      this.eventService.event.next("create");
    });
  }

  onSubmit() {
    this.createFile(this.createForm.value);
    this.createForm.reset();
  }
}
