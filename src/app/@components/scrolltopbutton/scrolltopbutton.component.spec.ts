import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolltopbuttonComponent } from './scrolltopbutton.component';

describe('ScrolltopbuttonComponent', () => {
  let component: ScrolltopbuttonComponent;
  let fixture: ComponentFixture<ScrolltopbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrolltopbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrolltopbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
