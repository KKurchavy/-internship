import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FileEditorComponent } from './file-editor.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UpdateInputComponent } from '../update-input/update-input.component';
import { DeleteInputComponent } from '../delete-input/delete-input.component';
import { CreationComponent } from '../creation/creation.component';
import { CreateInputComponent } from '../create-input/create-input.component';
import { DragCreateComponent } from '../drag-create/drag-create.component';

describe('FileEditorComponent', () => {
  let component: FileEditorComponent;
  let fixture: ComponentFixture<FileEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, ReactiveFormsModule ],
      declarations: [ 
        FileEditorComponent,
        CreationComponent,
        UpdateInputComponent,
        CreateInputComponent,
        DragCreateComponent,
        DeleteInputComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
