import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FileEditorComponent } from './file-editor/file-editor.component';
import { CreateInputComponent } from './create-input/create-input.component';
import { UpdateInputComponent } from './update-input/update-input.component';
import { DeleteInputComponent } from './delete-input/delete-input.component';

@NgModule({
  declarations: [
    FileEditorComponent,
    CreateInputComponent,
    UpdateInputComponent,
    DeleteInputComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FileEditorComponent]
})
export class EditorModule { }