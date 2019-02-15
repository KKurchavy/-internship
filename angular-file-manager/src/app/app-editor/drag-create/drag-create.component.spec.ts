import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragCreateComponent } from './drag-create.component';

describe('DragCreateComponent', () => {
  let component: DragCreateComponent;
  let fixture: ComponentFixture<DragCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
