import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationComponent } from './creation.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateInputComponent } from '../create-input/create-input.component';
import { DragCreateComponent } from '../drag-create/drag-create.component';
import { UpdateInputComponent } from '../update-input/update-input.component';
import { DeleteInputComponent } from '../delete-input/delete-input.component';

describe('CreationComponent', () => {
  let component: CreationComponent;
  let fixture: ComponentFixture<CreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, ReactiveFormsModule],
      declarations: [ 
        CreationComponent,
        CreateInputComponent,
        UpdateInputComponent,
        DeleteInputComponent,
        DragCreateComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
