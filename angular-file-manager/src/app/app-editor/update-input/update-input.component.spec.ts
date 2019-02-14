import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';

import { UpdateInputComponent } from './update-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilesService } from 'src/app/files.service';
import { EventService } from 'src/app/event.service';
import { BehaviorSubject, Subject } from 'rxjs';

describe('UpdateInputComponent', () => {
  let component: UpdateInputComponent;
  let fixture: ComponentFixture<UpdateInputComponent>;

  let filesService: Partial<FilesService>;
  let eventService: Partial<EventService>;

  filesService = {
    updateFile(fileName: string, fileData: string) {
      return new BehaviorSubject(fileName  + fileData);
    }
  }
  eventService = {
    event: new Subject<any>()
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ UpdateInputComponent ],
      providers: [
        { provide: FilesService, useValue: filesService },
        { provide: EventService, useValue: eventService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update file and forward the event "update"', fakeAsync(() => {
    component.updateForm.setValue({
      'name': 'file',
      'data': 'new data'
    });
    component.onSubmit();
    eventService.event.subscribe(event => {
      expect(event).toEqual('update');
    });

    flush();
  }));
});
