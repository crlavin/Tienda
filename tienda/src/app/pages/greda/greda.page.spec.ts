import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GredaPage } from './greda.page';

describe('GredaPage', () => {
  let component: GredaPage;
  let fixture: ComponentFixture<GredaPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(GredaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
