import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScindapsusPage } from './scindapsus.page';

describe('ScindapsusPage', () => {
  let component: ScindapsusPage;
  let fixture: ComponentFixture<ScindapsusPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(ScindapsusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
