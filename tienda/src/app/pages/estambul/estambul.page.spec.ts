import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstambulPage } from './estambul.page';

describe('EstambulPage', () => {
  let component: EstambulPage;
  let fixture: ComponentFixture<EstambulPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(EstambulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
