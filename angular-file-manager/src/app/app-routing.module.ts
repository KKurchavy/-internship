import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateInputComponent } from './app-editor/create-input/create-input.component';
import { DeleteInputComponent } from './app-editor/delete-input/delete-input.component';
import { UpdateInputComponent } from './app-editor/update-input/update-input.component';

const routes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'create', component: CreateInputComponent },
  { path: 'update', component: UpdateInputComponent },
  { path: 'delete', component: DeleteInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
