import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColgantePage } from './colgante.page';

describe('ColgantePage', () => {
  let component: ColgantePage;
  let fixture: ComponentFixture<ColgantePage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(ColgantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
