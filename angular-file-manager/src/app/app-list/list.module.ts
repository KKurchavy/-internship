import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileListComponent } from './file-list/file-list.component';

@NgModule({
  declarations: [FileListComponent],
  exports: [FileListComponent],
  imports: [CommonModule]
})
export class ListModule {}
