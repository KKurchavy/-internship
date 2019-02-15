import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FileDropModule } from 'ngx-file-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FileEditorComponent } from './file-editor/file-editor.component';
import { CreateInputComponent } from './create-input/create-input.component';
import { UpdateInputComponent } from './update-input/update-input.component';
import { DeleteInputComponent } from './delete-input/delete-input.component';
import { DragCreateComponent } from './drag-create/drag-create.component';

@NgModule({
  declarations: [
    FileEditorComponent,
    CreateInputComponent,
    UpdateInputComponent,
    DeleteInputComponent,
    DragCreateComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileDropModule
  ],
  exports: [FileEditorComponent]
})
export class EditorModule { }