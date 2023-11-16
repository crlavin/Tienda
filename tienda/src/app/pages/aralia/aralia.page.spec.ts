import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AraliaPage } from './aralia.page';

describe('AraliaPage', () => {
  let component: AraliaPage;
  let fixture: ComponentFixture<AraliaPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(AraliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
