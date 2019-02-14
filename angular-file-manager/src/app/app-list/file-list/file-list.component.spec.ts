import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { FileListComponent } from './file-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilesService } from 'src/app/files.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { EventService } from 'src/app/event.service';

describe('FileListComponent', () => {
  let component: FileListComponent;
  let fixture: ComponentFixture<FileListComponent>;

  let filesService: Partial<FilesService>;
  let eventService: Partial<EventService>;

  const mockList = ['file1', 'file2'];

  filesService = {
    getList() {
      return new BehaviorSubject<string[]>(mockList);
    }
  }
  eventService = {
    event: new Subject<any>()
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ FileListComponent ],
      providers: [
        { provide: FilesService, useValue: filesService },
        { provide: EventService, useValue: eventService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update file list', fakeAsync(() => {
    component.updateList();
    expect(component.fileList).toEqual(mockList);
    
    flush();
  }));

  it('should update the file list after the occurrence of some event', fakeAsync(() => {
    component.fileList = [];
    eventService.event.next('create');
    expect(component.fileList).toEqual(mockList);
    
    flush();
  }));
});
