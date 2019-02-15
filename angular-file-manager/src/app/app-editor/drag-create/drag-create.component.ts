import { Component } from "@angular/core";
import { FilesService } from "src/app/files.service";
import { EventService } from "src/app/event.service";

@Component({
  selector: "app-drag-create",
  templateUrl: "./drag-create.component.html",
  styleUrls: ["./drag-create.component.css"]
})
export class DragCreateComponent {
  dragoverflag: boolean = false;
  private defaultData = "default data";

  constructor(
    private filesService: FilesService,
    private eventService: EventService
  ) {}

  onDropFile(event: DragEvent) {
    const { files } = event.dataTransfer;

    this.dragoverflag = false;
    this.createFile(this.getFirstFile(files).name, this.defaultData);
    this.preventAndStop(event);
  }

  private createFile(name: string, data: string) {
    this.filesService.createFile(name, data).subscribe(() => {
      this.eventService.event.next("create");
    });
  }

  onDragOver(event: DragEvent) {
    this.dragoverflag = true;
    this.preventAndStop(event);
  }

  onDragLeave(event: DragEvent) {
    this.dragoverflag = false;
    this.preventAndStop(event);
  }

  private getFirstFile(files: FileList) {
    return files.item(0);
  }

  private preventAndStop(event: DragEvent): void {
    event.stopPropagation();
    event.preventDefault();
  }
}
