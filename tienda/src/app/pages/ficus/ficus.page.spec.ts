import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FicusPage } from './ficus.page';

describe('FicusPage', () => {
  let component: FicusPage;
  let fixture: ComponentFixture<FicusPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(FicusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
