import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalmeraPage } from './palmera.page';

describe('PalmeraPage', () => {
  let component: PalmeraPage;
  let fixture: ComponentFixture<PalmeraPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(PalmeraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
