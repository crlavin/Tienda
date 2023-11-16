import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NordicoPage } from './nordico.page';

describe('NordicoPage', () => {
  let component: NordicoPage;
  let fixture: ComponentFixture<NordicoPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(NordicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
