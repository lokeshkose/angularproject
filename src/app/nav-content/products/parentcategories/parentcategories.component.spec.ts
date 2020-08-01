import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcategoriesComponent } from './parentcategories.component';

describe('ParentcategoriesComponent', () => {
  let component: ParentcategoriesComponent;
  let fixture: ComponentFixture<ParentcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
