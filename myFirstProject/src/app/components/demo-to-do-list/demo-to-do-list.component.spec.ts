import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoToDoListComponent } from './demo-to-do-list.component';

describe('DemoToDoListComponent', () => {
  let component: DemoToDoListComponent;
  let fixture: ComponentFixture<DemoToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
