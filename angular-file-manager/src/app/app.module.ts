import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EditorModule } from './app-editor/editor.module';
import { ListModule } from './app-list/list.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
