import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlvidoContraPage } from './olvido-contra.page';

describe('OlvidoContraPage', () => {
  let component: OlvidoContraPage;
  let fixture: ComponentFixture<OlvidoContraPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(OlvidoContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
