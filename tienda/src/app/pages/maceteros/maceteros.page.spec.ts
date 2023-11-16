import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaceterosPage } from './maceteros.page';

describe('MaceterosPage', () => {
  let component: MaceterosPage;
  let fixture: ComponentFixture<MaceterosPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MaceterosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
