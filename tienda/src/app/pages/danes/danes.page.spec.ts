import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DanesPage } from './danes.page';

describe('DanesPage', () => {
  let component: DanesPage;
  let fixture: ComponentFixture<DanesPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(DanesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
