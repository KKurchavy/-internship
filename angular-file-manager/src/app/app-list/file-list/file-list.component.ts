import { Component, OnInit } from "@angular/core";
import { FilesService } from '../../files.service';
import { EventService } from '../../event.service';

@Component({
  selector: "app-file-list",
  templateUrl: "./file-list.component.html",
  styleUrls: ["./file-list.component.css"]
})
export class FileListComponent implements OnInit {
  fileList: string[];

  constructor(private fileService: FilesService, private eventService: EventService) {}

  ngOnInit() {
    this.fileService.getList().subscribe(list => {
      this.fileList = list;
    });

    this.eventService.event.subscribe(() => {
      this.updateList();
    });
  }

  updateList() {
    this.fileService.getList().subscribe(list => {
      this.fileList = list;
    });
  }
}
