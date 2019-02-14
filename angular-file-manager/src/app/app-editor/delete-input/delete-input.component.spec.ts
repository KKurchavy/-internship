import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { DeleteInputComponent } from './delete-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilesService } from 'src/app/files.service';
import { EventService } from 'src/app/event.service';
import { BehaviorSubject, Subject } from 'rxjs';

describe('DeleteInputComponent', () => {
  let component: DeleteInputComponent;
  let fixture: ComponentFixture<DeleteInputComponent>;

  let filesService: Partial<FilesService>;
  let eventService: Partial<EventService>;

  filesService = {
    createFile(fileName: string, fileData: string) {
      return new BehaviorSubject(fileName  + fileData);
    }
  }
  eventService = {
    event: new Subject<any>()
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ DeleteInputComponent ],
      providers: [
        { provide: FilesService, useValue: filesService },
        { provide: EventService, useValue: eventService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete file and forward the event "delete"', fakeAsync(() => {
    component.deleteControl.setValue('file');

    eventService.event.subscribe(event => {
      expect(event).toEqual('delete');
    });

    flush();
  }));
});
