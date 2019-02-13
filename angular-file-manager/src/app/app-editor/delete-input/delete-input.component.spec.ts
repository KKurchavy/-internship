import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInputComponent } from './delete-input.component';

describe('DeleteInputComponent', () => {
  let component: DeleteInputComponent;
  let fixture: ComponentFixture<DeleteInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
