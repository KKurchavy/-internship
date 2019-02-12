import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInputComponent } from './update-input.component';

describe('UpdateInputComponent', () => {
  let component: UpdateInputComponent;
  let fixture: ComponentFixture<UpdateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
