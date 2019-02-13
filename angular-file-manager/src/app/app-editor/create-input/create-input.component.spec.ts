import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInputComponent } from './create-input.component';

describe('CreateInputComponent', () => {
  let component: CreateInputComponent;
  let fixture: ComponentFixture<CreateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
