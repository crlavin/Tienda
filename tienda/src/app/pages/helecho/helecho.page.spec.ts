import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelechoPage } from './helecho.page';

describe('HelechoPage', () => {
  let component: HelechoPage;
  let fixture: ComponentFixture<HelechoPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(HelechoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
