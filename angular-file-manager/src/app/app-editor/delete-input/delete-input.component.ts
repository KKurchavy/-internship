import { Component, OnInit } from "@angular/core";
import { FilesService } from "../../files.service";
import { EventService } from "../../event.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-delete-input",
  templateUrl: "./delete-input.component.html",
  styleUrls: ["./delete-input.component.css"]
})
export class DeleteInputComponent implements OnInit {
  deleteForm = new FormGroup({
    name: new FormControl("")
  });

  constructor(
    private fileService: FilesService,
    private eventService: EventService
  ) {}
  
  ngOnInit() {}

  private deleteFile({ name }) {
    this.fileService.deleteFile(name).subscribe(() => {
      this.eventService.event.next("detete");
    });
  }

  onSubmit() {
    this.deleteFile(this.deleteForm.value);
    this.deleteForm.reset();
  }
}
