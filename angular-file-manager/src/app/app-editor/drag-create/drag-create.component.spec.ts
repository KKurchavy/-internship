import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { DragCreateComponent } from './drag-create.component';
import { FilesService } from 'src/app/files.service';
import { EventService } from 'src/app/event.service';
import { BehaviorSubject, Subject } from 'rxjs';


describe('DragCreateComponent', () => {
  let component: DragCreateComponent;
  let fixture: ComponentFixture<DragCreateComponent>;

  let filesService: Partial<FilesService>;
  let eventService: Partial<EventService>;
  let dragEventInit: Partial<DragEventInit>;
  let dataTransfer: Partial<DataTransfer>;

  filesService = {
    createFile(fileName: string | any, fileData: string) {
      return new BehaviorSubject(fileName  + fileData);
    }
  }

  eventService = {
    event: new Subject<any>()
  }

  dragEventInit = {
    dataTransfer: new DataTransfer()
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragCreateComponent ],
      providers: [
        { provide: FilesService, useValue: filesService },
        { provide: EventService, useValue: eventService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a file and forward an event', fakeAsync(() => {
    component.onDropFile(new DragEvent('drop', dragEventInit));
    eventService.event.subscribe(event => {
      expect(event).toEqual('create');
    });

    flush();
  }));

  it('should change color', () => {
    component.onDragOver(new DragEvent('dragover'));
    const box: HTMLElement = fixture.debugElement.nativeElement.querySelector('.drop-box');
    expect(box.classList.toggle('over')).toBeTruthy();
  });
});
