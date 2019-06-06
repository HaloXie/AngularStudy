import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoToDoListSearchComponent } from './demo-to-do-list-search.component';

describe('DemoToDoListSearchComponent', () => {
  let component: DemoToDoListSearchComponent;
  let fixture: ComponentFixture<DemoToDoListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoToDoListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoToDoListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
