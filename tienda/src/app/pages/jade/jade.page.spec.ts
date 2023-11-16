import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JadePage } from './jade.page';

describe('JadePage', () => {
  let component: JadePage;
  let fixture: ComponentFixture<JadePage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(JadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
