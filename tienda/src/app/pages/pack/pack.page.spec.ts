import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PackPage } from './pack.page';

describe('PackPage', () => {
  let component: PackPage;
  let fixture: ComponentFixture<PackPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(PackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
