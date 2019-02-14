import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { CreateInputComponent } from './create-input.component';
import { FilesService } from 'src/app/files.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { EventService } from 'src/app/event.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateInputComponent', () => {
  let component: CreateInputComponent;
  let fixture: ComponentFixture<CreateInputComponent>;

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
      declarations: [ CreateInputComponent ],
      providers: [
        { provide: FilesService, useValue: filesService },
        { provide: EventService, useValue: eventService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create file and forward the event "create"', fakeAsync(() => {
    component.createForm.setValue({
      'name': 'file',
      'data': 'data'
    });
    component.onSubmit();
    eventService.event.subscribe(event => {
      expect(event).toEqual('create');
    });

    flush();
  }));
});
