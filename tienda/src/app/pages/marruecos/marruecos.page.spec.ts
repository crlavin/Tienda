import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarruecosPage } from './marruecos.page';

describe('MarruecosPage', () => {
  let component: MarruecosPage;
  let fixture: ComponentFixture<MarruecosPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MarruecosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
