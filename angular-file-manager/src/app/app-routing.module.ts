import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateInputComponent } from './app-editor/create-input/create-input.component';
import { DeleteInputComponent } from './app-editor/delete-input/delete-input.component';
import { UpdateInputComponent } from './app-editor/update-input/update-input.component';
import { DragCreateComponent } from './app-editor/drag-create/drag-create.component';
import { CreationComponent } from './app-editor/creation/creation.component';

const routes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'update', component: UpdateInputComponent },
  { path: 'delete', component: DeleteInputComponent },
  { path: 'create', component: CreationComponent, children: [
    { path: '', redirectTo: 'manually', pathMatch: 'full' },
    { path: 'manually', component: CreateInputComponent },
    { path: 'drag', component: DragCreateComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
