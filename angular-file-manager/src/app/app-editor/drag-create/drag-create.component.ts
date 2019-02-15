import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FilesService } from 'src/app/files.service';
import { EventService } from 'src/app/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-drag-create',
  templateUrl: './drag-create.component.html',
  styleUrls: ['./drag-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragCreateComponent implements OnDestroy {
  isOver: boolean = false;
  private subscription: Subscription;

  constructor(
    private filesService: FilesService,
    private eventService: EventService
  ) {}

  onDropFile(event: DragEvent) {
    const { files } = event.dataTransfer;

    this.isOver = false;
    this.createFile(this.getFirstFile(files).name);
    this.preventAndStop(event);
  }

  onDragOver(event: DragEvent) {
    this.isOver = true;
    this.preventAndStop(event);
  }

  onDragLeave(event: DragEvent) {
    this.isOver = false;
    this.preventAndStop(event);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private createFile(name: string) {
    this.subscription = this.filesService
      .createFile(name, 'DEFAULT DATA')
      .subscribe(() => {
        this.eventService.event.next('create');
      });
  }

  private getFirstFile(files: FileList) {
    return files.item(0);
  }

  private preventAndStop(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
  }
}
