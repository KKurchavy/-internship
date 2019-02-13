import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from "@angular/core";
import { FilesService } from "../../files.service";
import { EventService } from "../../event.service";
import { Observable, Subject, race } from "rxjs";
import { switchMap, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-file-list",
  templateUrl: "./file-list.component.html",
  styleUrls: ["./file-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileListComponent implements OnInit, OnDestroy {
  fileList: string[];
  event$: Observable<string> = this.eventService.event;

  private readonly destroy$ = new Subject<string>();

  constructor(
    private fileService: FilesService,
    private eventService: EventService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const stop$ = race(this.event$, this.destroy$);

    this.fileService
      .getList()
      .pipe(takeUntil(stop$))
      .subscribe(list => {
        this.fileList = list;
        this.cdr.markForCheck();
      });

    this.event$
      .pipe(
        switchMap(() => this.fileService.getList()),
        takeUntil(this.destroy$)
      )
      .subscribe(list => {
        this.fileList = list;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateList() {
    this.fileService
      .getList()
      .pipe(takeUntil(this.destroy$))
      .subscribe(list => {
        this.fileList = list;
        this.cdr.detectChanges();
      });
  }
}
