import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoraPage } from './bora.page';

describe('BoraPage', () => {
  let component: BoraPage;
  let fixture: ComponentFixture<BoraPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(BoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
